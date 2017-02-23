var express = require('express');
var infoRouter = express.Router();

module.exports = router = function () {
    infoRouter.route('/').get(function (req, res) {
        var hostinfo = require('./script.js')();
        res.render('index', {
            host: hostinfo.details()
        });
    });

    infoRouter.get('/servername', function (req, res) {
        setInterval(function () {
            res.render('index', {
                host: hostinfo
            });
        }, 5);
    });

    infoRouter.get('/ip', function (req, res) {

        var network = os.networkInterfaces();
        res.send(network.eth0[0].address);
    });

    infoRouter.get('/host', function (req, res) {

        var hostname = os.hostname();
        res.send(hostname);
    });

    return infoRouter;
};