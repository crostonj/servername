var express = require('express');
var app = express();
var os = require("os");
const path = require('path');

var port = 2000;
app.use(express.static(path.join(__dirname, 'bower_components')));
app.use(express.static('public'));

var hostinfo = require('./public/js/script.js')();
app.set('views', './views');
app.set('view engine', 'ejs');

//root request
app.get('/', function (req, res) {
        res.render('index', {
            host: hostinfo
        });
});

app.get('/servername', function (req, res) {
        res.render('index', {
            host: hostinfo
        });
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