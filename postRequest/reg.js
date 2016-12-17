var http = require('http');

var url = require('url');

var fs = require('fs');

var server = http.createServer(function (request, response) {
    var curUrl = request.url;
    var urlObj = url.parse(curUrl);
    if (urlObj.pathname == '/'){
        fs.readFile('./index.html',function (err, data) {
            response.end(data);
        })
    }else if (urlObj.pathname == '/reg'){
        request.on('data',function (data) {
            var str = data;
        });
        request.on('end',function () {
            response.end('看到我说明你已post成功');
        })
    }
});

server.listen('8080','localhost');