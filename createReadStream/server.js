//读取文件内容
/**
 * 常用参数：
 * 1.flags   对文件的操作方式  默认r
 * 2.encoding   指定编码   默认null
 * 3.autoClose    读取数据后是否关闭文件描述
 * 4.start    开始读取的位置
 * 5.end    读取结束的位置
 * 6.highWaterMark   每次读取的字节，默认为64kb
 * **/
var fs = require('fs');

    var rs = fs.createReadStream('./index.txt');
    rs.on('data',function (data) {
        console.log(data);
    });
    rs.on('end',function () {
        console.log('读取完成');
    });


//写入文件内容
/**
 * 常用参数
 * 1.setEncoding   指定编码
 * 2.pause     停止传送
 * 3.resume    恢复传送
 * 4.pipe      控制读写速度
 * **/
var ws = fs.createWriteStream('./test.txt',{
    flags:'a'
});
var a = 'ssssssssssss';
ws.write(a,'utf8',function () {
    console.log('写入完成');
});
ws.end();
