
var os = require("os");
var http = require('http')
var url = require('url');

var hostinfo = function(){

    var network = os.networkInterfaces();
    var address = network.eth0[0].address;

    return {
        name : os.hostname(),
        address : address,
        time: new Date().toLocaleString(),
    }
}

module.exports = hostinfo;