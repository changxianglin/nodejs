// 引入依赖
const express = require('express')
const mongoose = require('mongoose')

const app = express()

app.get('/', function(req, res) {
    res.send('Hello World!')
})

app.listen(8090, function() {
    console.log(233)
})