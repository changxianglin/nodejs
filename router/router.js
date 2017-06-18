var express = require('express');
var app = express();

// 静态文件
 app.use(express.static(path.join(__dirname, 'public')));

 // 路由函数
 app.get('/', function(req, res) {
     res.send("Hello world")
 })
