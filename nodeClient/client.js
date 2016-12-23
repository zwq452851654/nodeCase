var http = require('http');
var options = {
    host:'localhost',
    port:8080,
    path:'/post',
    method:'POST',
    headers:{}
};
var request = http.request(options,function (res) {
    //console.log(res.headers);
    var user = '';
    res.setEncoding('utf8');
    res.on('data',function (data) {
        //console.log(data);
        user += data;
    });
    res.on('end',function () {
       console.log(user);
    })
});

request.write('{"name":"zhang"');
request.write(',"age":20}');
request.end();