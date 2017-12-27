var http = require('http');
var fs = require('fs');

var server = http.createServer(function(req, res){
    console.log(req.url);
    res.write("<h1>Welcome to WORLD OF LOVE...!!!!</h1>");
    res.write("<h1>Welcome to WORLD OF LOVE...!!!!</h1>");
    res.end();
});

server.listen(9090)