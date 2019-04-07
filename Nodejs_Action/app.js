var express = require('express')
var path = require('path')
var favicon = require('server-favicon')
var logger = require('morgan')
var cookieParser = require('cookie-parser')
var bodyParser = require('body-parser')

var index = require('./routes/index')
var users = require('./routes/users')

var app = express()

app.set('view', path.join(__dirname, 'views'))

app.set('view engine', 'ejs')