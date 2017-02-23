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
            res.send(hostinfo.hostname);
    });

    infoRouter.get('/host', function (req, res) {

        var hostname = os.hostname();
        res.send(hostname);
    });

    return infoRouter;
};