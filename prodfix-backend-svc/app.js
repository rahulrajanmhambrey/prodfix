const taskService = require("./tasksvc.js");

const express = require("express");

const app = express();

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

 app.get('/prodfix/tasks/', function (req, res) {
    res.send('Get tasks');
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
  var client = new MongoClient(url);
}

 var server = app.listen(8000, function () {
    var host = server.address().address
    var port = server.address().port
    
    console.log("Example app listening at http://%s:%s", host, port)
 })