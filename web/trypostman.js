const express = require('express')

const app = express()

app.get('/', function(req, res) {
  console.dir(req.query)
  res.send('home page:' + req.query.find)
})

app.get('/profile/:id/user/:name', function(req, res) {
  console.dir(req.params)
  send.send('You requested to see a profile with the name of ' + req.params.name)
})

app.get('/ab?cd', function(req, res) {
  res.send('/ab?cd')
})

app.listen(3000, () => {
  console.log('app run port 3000')
})
