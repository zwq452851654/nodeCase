var http = require('http');
var url = require('url');

var server = http.createServer(function (request,response) {
    var curUrl = request.url;
    var urlObj = url.parse(curUrl);
    var pathname = urlObj.pathname;

    if (pathname == '/test'){
        response.end("c(['node','javascript'])")
    }
});

server.listen('8080','localhost');