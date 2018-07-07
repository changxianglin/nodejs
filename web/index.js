const path = require('path')
const express = require('express')
const app = express()
const indexRouter = require('./routers/index')
const usersRouter = require('./routers/users')

app.set('views', path.join(__dirname, 'views')) // 设置模板文件目录
app.set('view engine', 'ejs') // 设置模板引擎为 ejs

app.use('/', indexRouter)
app.use('/users', usersRouter)

app.listen(9000)