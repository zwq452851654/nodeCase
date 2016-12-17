var http = require('http');

var fs = require('fs');

var url = require('url');

var server = http.createServer(function (request, response) {

    var urlObj = url.parse(request.url,true);

    if (urlObj.pathname == '/'){
        fs.readFile('./index.html',function (err, data) {
            response.end(data);
        });

    }else if (urlObj.pathname == '/index'){
        response.end(new Date().toLocaleString())
    }

});

server.listen('8090','localhost');