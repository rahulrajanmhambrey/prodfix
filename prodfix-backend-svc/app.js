const taskService = require("./tasksvc.js");

const express = require("express");
const cors = require('cors');

const app = express();

app.use(cors());

// app.use((req, res, next) => {
//   res.setHeader("Access-Control-Allow-Origin", "*");
//   res.setHeader("Access-Control-Allow-Methods", "POST, GET, PUT");
//   res.setHeader("Access-Control-Allow-Headers", "Content-Type");
//   next();
// })

var MongoClient = require('mongodb').MongoClient;
var url = "mongodb://127.0.0.1:27017";


app.use(express.json());

app.post('/prodfix/login/', function (req, res) {
    res.send(req.body.username);
 });

 app.post('/prodfix/task/add', function (req, res) {

   var task = {
      taskname: req.body.task_name,
      taskdescription: req.body.task_description,
      url: req.body.url,
      baseurl: req.body.base_url,
      elementdetails: req.body.element_details,
      createdtimestamp: new Date().toLocaleString()
   };

   console.log(task);

   AddTask(task).then(result => {
    res.send(result);
   });
    
 });

 app.get('/prodfix/tasks', function (req, res) {

  console.log(Object.keys(req.body).length == 0);
    if(Object.keys(req.body).length == 0){
      GetTasks().then((result) => {
        res.send(result);
      });
    }
    else{
      GetTasksByUrl(req.body.base_url).then((result) => {
        res.send(result);
      });
    }  
    
 });

 async function AddTask(taskdetails) {
   var result = false;
   var client = new MongoClient(url);

   var task = { _taskname: taskdetails.taskname,
    _taskdescription: taskdetails.taskdescription, _url: taskdetails.url, _baseurl: taskdetails.baseurl,
     _elementdetails: taskdetails.elementdetails, _createdtimestamp: taskdetails.createdtimestamp };

   await client.db("prodfixdb").collection("tasks").insertOne(task).then((res) => {
    console.log(res);
    result = true;
    client.close();
   });

     return result;
}

async function GetTasks(){
  var result = [];
  var client = new MongoClient(url);

  await client.db("prodfixdb").collection("tasks").find({}).toArray().then((res) => {
    console.log(res);
    result = res;
    client.close();
  });

  return result;
}

async function GetTasksByUrl(baseurl){
  var result = [];
  var client = new MongoClient(url);

  var query = { _baseurl: baseurl };
  await client.db("prodfixdb").collection("tasks").find(query).toArray().then((res) => {
    console.log(res);
    result = res;
    client.close();
  });

  return result;
}

 var server = app.listen(8000, function () {
    var host = server.address().address
    var port = server.address().port
    
    console.log("Example app listening at http://%s:%s", host, port)
 })