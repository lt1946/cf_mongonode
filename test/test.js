var http = require('http');
var server = http.createServer(function (request, response) {
    var j = 0;
    for (var i = 0; i <100000; i++) {
        j += 2 / 3;
    }
    response.end(j + '');
});
var nodes = require("./lib/multi-node").listen({
    port: 8883,
    nodes: 4
}, server);
console.log('Server running at http://localhost:8883/');