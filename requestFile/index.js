var http = require('http');
var fs = require('fs');
var mime = require('mime');

var server = http.createServer(function (request, response) {

    var url = request.url;
    if (url == '/'){
        url = '/index.html';
    }
    console.log(url);
    console.log(mime.lookup(url));
    response.setHeader('Content-Type',mime.lookup(url)+';charset=utf-8');
        fs.readFile('requestFile'+url,function (err, data) {
            console.log(err);
            response.write(data);
            response.end();
        });

});

server.listen(8080,'localhost');