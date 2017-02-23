var ip = require('ip');
var http = require('http')
var url = require('url');
var os = require('os');

module.exports =
    hostinfo = function () {
        return {
            details: function () {

                //var network = os.networkInterfaces();
                var address = ip.address();

                return {
                    name: os.hostname(),
                    address: address,
                    time: new Date().toLocaleTimeString(),
                    date: new Date().toLocaleDateString()
                }
            }
        }
    }