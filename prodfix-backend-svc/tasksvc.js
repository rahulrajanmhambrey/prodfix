var MongoClient = require('mongodb').MongoClient;
var url = "mongodb://localhost:27017/";

function AddTask(taskdetails) {
    MongoClient.connect(url, function(err, db) {
        if (err) throw err;
        var dbo = db.db("mydb");
        var task = { _taskname: taskdetails.taskname,
             _taskdescription: taskdetails.taskdescription, _url: taskdetails.url, _baseurl: taskdetails.baseurl, _elementdetails: taskdetails.elementdetails };
        dbo.collection("tasks").insertOne(task, function(err, res) {
          if (err) {
            var result = false;
          }
          console.log("1 document inserted");

          result = true;
          db.close();
        });
      });

      return result;
}