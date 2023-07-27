var MongoClient = require('mongodb').MongoClient;
var url = "mongodb://localhost:27017/";

function Login(username, password) {
    MongoClient.connect(url, function(err, db) {
        if (err) throw err;
        var dbo = db.db("prodfixdb");
        var query = { _username: username, _password: password };
        dbo.collection("users").find(query).toArray(function(err, result) {
          if (err) throw err;
          console.log(result);
          db.close();
        });
      });
}