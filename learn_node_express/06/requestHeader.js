const express = require('express')

const app = express()

app.get('/headers', (req, res) => {
  res.set('Content-Type', 'text/plain')
  var s = ''
  for (var name in req.headers) s += name + ': ' + req.headers[name] + '\n'
  res.send(s)
})

app.listen(3000, () => {
  console.log('Server started in http://localhost:3000/')
})