
var express = require('express')
  , config = require('./config/config')
  , path=require('./action/path');
  
var app = express.createServer();
config.init(app);
path.init(app);
app.listen(config.port);
console.log('Server start http://localhost:' + config.port);