const express = require('express')
const fs = require('fs')
const path = require('path')
const bodyParser = require('body-parser')

const app = express.Router()

app.use(bodyParser.urlencoded({extends: false}))
app.use(bodyParser.json())

template.defaults.import.ageFilter = function(value) {
  
}
app.get('/render', (req, res) => {
  let dataList = [17, 18, 19, 20, 21, 22]
  res.render('index.html', dataList)
})

app.get('/index.html', (req, res) => {
  const filePath = path.join(__dirname, 'views', 'index.html')
  const contents = fs.readFileSync(filePath, 'utf-8')
  res.send(contents)

  const query = req.query
  console.log(query)
})

// app.get('/register', function(req, res) {
//   const filePath = path.join(__dirname, 'views', 'register.html')
//   const contents = fs.readFileSync(filePath, 'utf-8')
//   res.send(contents)
// })

// app.post('/register', function(req, res) {
//   let body = req.body 
//   const { username, email, password } = body
//   console.log(username, email, password)
//   // res.send('post 提交成功')
//   res.redirect('/login.html')
// })

app.all('/register', function(req, res) {
  const method = req.method
  if(method == 'GET') {
      const filePath = path.join(__dirname, 'views', 'register.html')
      const contents = fs.readFileSync(filePath, 'utf-8')
      res.send(contents)
  } else if(method == 'POST') {
      let body = req.body 
      const { username, email, password } = body
      console.log(username, email, password)
      // res.send('post 提交成功')
      res.redirect('/login.html')
  }
})

app.get('/login.html', function(req, res) {
  const filePath = path.join(__dirname, 'views', 'login.html')
  const contents = fs.readFileSync(filePath, 'utf-8')
  res.send(contents)
})

app.get('/list.html', (req, res) => {
  res.render('list')
})

app.get('/detail/:id', (req, res) => {
  res.send('detail page ' + req.params.id)
})

app.get('/', (req, res) => {
  res.send('hello')
})

const routers = app

module.exports = routers