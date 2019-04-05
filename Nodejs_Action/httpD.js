var http = require('http')
var fs = require('fs')
var url = require('url')
var path = require('path')

var mime = require('./mime')

var server = http.createServer((req, res) => {
  var filePath = '.' + url.parse(req.url).pathname
  if(filePath === './') {
    filePath = './index.html'
  }


  fs.exists(filePath, (exist) => {
    if(exist) {
      var data = fs.readFileSync(filePath)
      var contentType = mime[path.extname(filePath)]
      res.writeHead(200, {
        'content-type': contentType
      })
      res.write(data)
      res.end()
    } else {
      res.end('404')
    }
  })
  // res.writeHead(200, {
  //   'content-type': 'text/html'
  // })

  // var data = fs.readFileSync('./index.html')

  // res.write(data)
  // res.end()
})

server.listen(3000, () => {
  console.log('listening port 3000')
})