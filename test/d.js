var server = require("http").createServer(function(request, response){
        
    });
var nodes = require("multi-node").listen({
        port: 80, 
        nodes: 4
    }, server);