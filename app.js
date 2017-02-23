var express = require('express');
var app = express();

var port = 2000;
app.use(express.static('public'));

app.set('views', './views');
app.set('view engine', 'ejs');


var infoRouter = require('./src/serverinfoRouter.js')();
app.use('/', infoRouter);

app.listen(port, function (err) {
    console.log('running server on port ' + port);
});