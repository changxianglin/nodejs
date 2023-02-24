const express = require('express')
const fs = require('fs')
const path = require('path')
const bodyParser = require('body-parser')
const app = express()
const port = 3000

app.use(bodyParser.urlencoded({extends: false}))
app.use(bodyParser.json())

app.get('/index.html', (req, res) => {
  const filePath = path.join(__dirname, 'views', 'index.html')
  const contents = fs.readFileSync(filePath, 'utf-8')
  res.send(contents)

  const query = req.query
  console.log(query)
})

app.get('/register', function(req, res) {
  const filePath = path.join(__dirname, 'views', 'register.html')
  const contents = fs.readFileSync(filePath, 'utf-8')
  res.send(contents)
})

app.post('/register', function(req, res) {
  let body = req.body 
  const { username, email, password } = body
  console.log(username, email, password)
  // res.send('post 提交成功')
  res.redirect('/login.html')
})

app.get('/login.html', function(req, res) {
  const filePath = path.join(__dirname, 'views', 'login.html')
  const contents = fs.readFileSync(filePath, 'utf-8')
  res.send(contents)
})

app.get('/', (req, res) => {
  res.send('hello')
})

app.listen(port, () => {
  console.log('express server running')
})