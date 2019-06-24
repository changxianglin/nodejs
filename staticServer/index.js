const express = require('express')
const fs = require('fs')

const app = new express()

const content = []
const path = 'files/'

const findFiles = function(path) {
  var files = fs.readdirSync(path)
  files.forEach((item) => {
    if(fs.statSync(path + item).isFile()) {
      content.push(path + item)
    } else if(fs.statSync(path + item).isDirectory()) {
      findFiles(path + item + '/')
    }
  })
}

app.get('/', (req, res) => {
  findFiles(path)
  var html = content.map((item) => {
    return `<a href =` + `down?file=${item}>` + `${item}</a><br />`
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
