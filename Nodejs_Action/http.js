const http = require('http')

const server = http.createServer((req, res) => {
  res.writeHead(200, {
    'content-type': 'text/plain'
  })
  res.end('Hello, Node.js!')
})

server.listen(3000, () => {
  console.log('listening port 3000')
})