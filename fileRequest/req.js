var http = require('http');
var url = require('url');
var fs = require('fs');
var formidable = require('formidable');
var util = require('util');
var mime = require('mime');

var server = http.createServer(function (request, response) {
    var curUrl = request.url;
    var urlObj = url.parse(curUrl);
    var pathname = urlObj.pathname;
    if (pathname == '/') {
        fs.readFile('./index.html', function (err, data) {
            response.end(data);
        })
    } else if (pathname == '/reg') {

        var form = new formidable.IncomingForm();

        form.parse(request, function (err, fields, files) {
            fs.readFile(files.avatar.path, function (err, data) {
                var filename = '/imgs/' + files.avatar.name;
                fs.writeFile('.' + filename, data, function (err) {
                    response.writeHead(200, {'Content-Type': 'text/plain'});
                    response.end(filename)
                })
            })
        });
    }else {
        fs.exists('.'+pathname,function (exists) {
            if (exists){
                response.setHeader('Content-Type',mime.lookup('.'+pathname));
                fs.readFile('.'+pathname,function (err, data) {
                    response.end(data)
                })
            }else {
                response.statusCode = 404;
                response.end('404');
            }
        })
    }
});

server.listen('8080', 'localhost');