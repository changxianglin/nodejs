var express = require('express');
var app = express();
var bodyParser = require('body-parser');

var mongoose = require('mongoose');

var db = mongoose.connect('mongodb://localhost/test')

var Schema = mongoose.Schema;

var blogSchema = new Schema({
    first_name:  String,
    last_name: String,
});


// 创建 application/x-www-form-urlencoded 编码解析
var urlencodedParser = bodyParser.urlencoded({ extended: false })

app.use(express.static('public'));

app.get('/index.htm', function (req, res) {
    res.sendFile( __dirname + "/" + "index.htm" );
})

app.post('/process_post', urlencodedParser, function (req, res) {

    // 输出 JSON 格式
    var response = {
        "first_name":req.body.first_name,
        "last_name":req.body.last_name
    };
    var Blog = mongoose.model('Blog', blogSchema);
    var r = req.body.first_name
    var rs = req.body.last_name
    var silence = new Blog({first_name: r, last_name: rs})
    silence.save(function (err, data) {
        console.log('start' + data + 'end')
    })
    // console.log(req.body)
    res.end(JSON.stringify(response));
})

var server = app.listen(8081, function () {

    var host = server.address().address
    var port = server.address().port

    console.log("应用实例，访问地址为 http://%s:%s", host, port)

})