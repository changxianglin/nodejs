const http = require('http')

http.createServer((request, response) => {
  response.writeHead(200, {'content-type': 'text/plain'})
  response.write('hello world')
  response.end()
}).listen(3000)

console.log('server has started...')
