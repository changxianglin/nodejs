const express = require('express')
const fs = require('fs')
const path = require('path')
const bodyParser = require('body-parser')
const app = express()
const port = 3000
var template = require('art-template');

const routers = require('./routers/passport')

app.use(routers)

app.use(express.static(path.join(__dirname, 'public')))
app.use(bodyParser.urlencoded({extends: false}))
app.use(bodyParser.json())


app.engine('html', require('express-art-template'))
app.set('views options', {
  debug: process.env.NODE_ENV !== 'production'
})
app.set('views', path.join(__dirname, 'views'))
app.set('view engine', 'html')

template.defaults.imports.ageFilter = function(value) {
  if(value >= 18) {
    return value
  }
}

app.get('/render', (req, res) => {
   let dataList = {
    ages: [17, 18, 19, 20, 21, 22]
  }
  res.render('index.html', dataList)
})

// app.get('/index.html', (req, res) => {
//   const filePath = path.join(__dirname, 'views', 'index.html')
//   const contents = fs.readFileSync(filePath, 'utf-8')
//   res.send(contents)

//   const query = req.query
//   console.log(query)
// })

// // app.get('/register', function(req, res) {
// //   const filePath = path.join(__dirname, 'views', 'register.html')
// //   const contents = fs.readFileSync(filePath, 'utf-8')
// //   res.send(contents)
// // })

// // app.post('/register', function(req, res) {
// //   let body = req.body 
// //   const { username, email, password } = body
// //   console.log(username, email, password)
// //   // res.send('post 提交成功')
// //   res.redirect('/login.html')
// // })

// app.all('/register', function(req, res) {
//   const method = req.method
//   if(method == 'GET') {
//       const filePath = path.join(__dirname, 'views', 'register.html')
//       const contents = fs.readFileSync(filePath, 'utf-8')
//       res.send(contents)
//   } else if(method == 'POST') {
//       let body = req.body 
//       const { username, email, password } = body
//       console.log(username, email, password)
//       // res.send('post 提交成功')
//       res.redirect('/login.html')
//   }
// })

// app.get('/login.html', function(req, res) {
//   const filePath = path.join(__dirname, 'views', 'login.html')
//   const contents = fs.readFileSync(filePath, 'utf-8')
//   res.send(contents)
// })

// app.get('/', (req, res) => {
//   res.send('hello')
// })

app.listen(port, () => {
  console.log('express server running')
})