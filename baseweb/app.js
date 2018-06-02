var express = require('express')

var  app = express()


app.get('/', function (req, res) {
    res.sendFile(__dirname + '/index.html')
})

app.get('/request', function (req, res) {
    res.send('request success!')
})

app.post('/info', function (req, res) {
    res.send('post can to server!!!')
})


app.listen(5000, function () {
    console.log('app running port 5000')
})