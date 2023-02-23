const express = require('express')
const fs = require('fs')
const path = require('path')
const app = express()
const port = 3000

app.get('/index.html', (req, res) => {
  const filePath = path.join(__dirname, 'views', 'index.html')
  const contents = fs.readFileSync(filePath, 'utf-8')
  res.send(contents)

  const query = req.query
  console.log(query)
})

app.get('/', (req, res) => {
  res.send('hello')
})

app.listen(port, () => {
  console.log('express server running')
})