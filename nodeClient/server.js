var http = require('http');
var users = [];
http.createServer(function (request, response) {
    request.setEncoding('utf8');
    var user = '';
    request.on('data',function (data) {
        user += data;
    });
    request.on('end',function () {
        var aa = JSON.parse(user);
        users.push(aa);
        response.end(JSON.stringify(users));
    });
}).listen(8080);