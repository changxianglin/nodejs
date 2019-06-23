const express = require('express')
const fs = require('fs')

const app = new express()

const content = []
const path = 'files/'

app.get('/', (req, res) => {
  var files = fs.readdirSync(path)
  files.forEach((item) => {
    content.push(item)
  })
  var html = content.map((item) => {
    return `<a href =` + `down?file=${path + item}>` + `${path + item}</a><br />`
  }).join('')
  res.send(html)
})

app.get('/down', (req, res) => {
  console.log(req.query.file)
  res.download(req.query.file)
})

app.listen(8080, () => {
  console.log('app running in port 8080...')
})
