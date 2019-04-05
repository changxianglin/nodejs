var http = require('http')
var fs = require('fs')
var url = require('url')
var path = require('path')

var mime = require('./mime')

var server = http.createServer((req, res) => {
  res.writeHead(200, {
    'content-type': 'text/html'
  })

  var data = fs.readFileSync('./index.html')

  res.write(data)
  res.end()
})

server.listen(3000, () => {
  console.log('listening port 3000')
})