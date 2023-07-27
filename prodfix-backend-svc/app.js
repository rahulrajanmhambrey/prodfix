const express = require("express");

const app = express();
app.use(express.json());

app.post('/prodfix/login/', function (req, res) {
    res.send(req.body.username);
 });

 app.post('/prodfix/task/add', function (req, res) {
    res.send(req.body.task_description);
 });

 app.get('/prodfix/tasks/', function (req, res) {
    res.send('Get tasks');
 });

 var server = app.listen(8000, function () {
    var host = server.address().address
    var port = server.address().port
    
    console.log("Example app listening at http://%s:%s", host, port)
 })