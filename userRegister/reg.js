var http = require('http');

var url = require('url');

var fs = require('fs');

var users = null;

var server = http.createServer(function (request,response) {

    var curUrl = request.url;
    var urlObj = url.parse(curUrl);
    //console.log(curUrl);
    if (urlObj.pathname == '/'){
        curUrl = '/reg.html';
        fs.readFile('.'+curUrl,function (err, data) {
            //console.log(data.toString());
            response.end(data)
        })
    }else if (urlObj.pathname == '/reg'){
        var str = '';
        request.on('data',function (data) {
            str+=data;
        });
        request.on('end',function () {
            //users.push(JSON.parse(str));
            response.end(str)
        })
    }
});

server.listen('8080','localhost');