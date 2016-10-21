var express = require('express');
var app = express();
var os = require("os");


var port = 4000;

app.get('/', function (req, res) {

    res.send("Hello World");
});

app.get('/ip', function (req, res) {

    var network = os.networkInterfaces();
    res.send(network.eth0[0].address);
});

app.get('/host', function (req, res) {

    var hostname = os.hostname();
    res.send(hostname);
});

app.listen(port, function (err) {
    console.log('running server on port ' + port);
});