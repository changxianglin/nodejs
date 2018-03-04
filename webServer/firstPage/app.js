const express = require('express')
const app = express()

app.use(express.static(public))

app.get('/', function(req, res) {
  res.send('This is page one.')
})

const server = app.listen(3000, function() {
  console.log('http://localhost:3000/')
})
