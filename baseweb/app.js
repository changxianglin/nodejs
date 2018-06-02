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


app.get('/', function (req, res) {
    res.sendFile(__dirname + '/index.html')
})

app.get('/request', function (req, res) {
    res.send('request success!')
})

app.get('/ajax', function (req, res) {
    res.sendFile(__dirname + '/ajax.html')
})

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


app.listen(5000, function () {
    console.log('app running port 5000')
})