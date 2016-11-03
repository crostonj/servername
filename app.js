var express = require('express');
var app = express();
var os = require("os");
var hostinfo = require('./js/script.js')();

var port = 8000;

app.use(express.static('public'));
app.set('views', './views');
app.set('view engine', 'ejs');



app.get('/', function (req, res) {



    console.log(hostinfo);
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