// server.js
var express = require('express');
var path = require('path');
var serveStatic = require('serve-static');
app = express();
app.use(serveStatic(__dirname + "/pages"));
var port = process.env.PORT || 7000;
app.listen(port);
console.log('server has been started '+ port);

