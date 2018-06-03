var express = require('express')
const mongoose = require('mongoose');
const bodyParser = require('body-parser')

mongoose.connect('mongodb://localhost/test');

var jsonParser = bodyParser.json()
var urlencodedParser = bodyParser.urlencoded({ extended: false })

const Cat = mongoose.model('Cat', {
    name: String,
    age: String,
    gender: String,
});

const Dog = mongoose.model('Dog', {
    first: String,
    end: String,
})

var  app = express()

// 主页
app.get('/', function (req, res) {
    res.sendFile(__dirname + '/index.html')
})

// 第一个请求
app.get('/request', function (req, res) {
    res.send('request success!')
})

// ajax 请求
app.get('/ajax', function (req, res) {
    res.sendFile(__dirname + '/ajax.html')
})

// ajax 保存数据
app.get('/ajaxinfo', function (req, res) {
    console.log(req.query)
    const ali = new Dog({
        first: req.query.name,
        end: req.query.end,
    })
    ali.save().then(() => {
        console.log('ok')
    })
    res.json(req.query)
})

// 查询数据
app.get('/allinfo', function(req, res) {
    Dog.find({}, {'_id':0, '__v': 0},function (err, kittens) {
        if (err) return console.error(err);
        res.json(kittens)
    })
})

// 保存数据 post
app.post('/info', urlencodedParser, function (req, res) {
    const kitty = new Cat({
        name: req.body.name,
        age: req.body.firstname,
        gender: req.body.gender,
    });
    kitty.save().then(() => console.log('meow'))
    console.log(req.body)
    res.send('post can to server!!!')
})

// 启动入口
app.listen(5000, function () {
    console.log('app running port 5000')
})