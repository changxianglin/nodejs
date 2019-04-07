var http = require('http')

http.createServer((req, res) => {
  res.writeHead(200, { 'Content-Type': 'text/plain'})
  res.end('Hello world!')
}).listen(3000)

console.log('Server Started on localhost:3000; press Ctrl-C to terminate...')
