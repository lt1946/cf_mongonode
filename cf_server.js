
var express = require('express');
var config = require('./config/configBase');
var path=require('./action/path');
//var io=require('socket.io').listen(3003);
  
var app = express.createServer();
config.init(app);
path.init(app);
app.listen(config.port);

/*
io.sockets.on('connection', function (socket) {

      socket.emit('news', { hello: 'world' });
      socket.on('my other event', function (data) {
        console.log(data);
      });


  //公共信息
    socket.on('public message',function(msg, fn){
		socket.broadcast.emit('public message',   msg);
		fn(true);
	});
});
 */

console.log('Server start http://'+config.host+':' + config.port);