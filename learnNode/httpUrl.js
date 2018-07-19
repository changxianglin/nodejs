// import http from 'http'

const http = require('http')

http.createServer((request, response) => {
  let html = `<html>
              <head>
              <meta charset=UTF-8>
              </head>
              <body>
              <form action = "/" method = "post">
              <p>username: <input type = "text" name = "username" /></p>
              <p>password: <input type = "password" name = "password" /></p>
              <p>age: <input type = "text" name = "age" /></p>
              <p><input type = "submit" value = "submit" name = "submit" /></p>
              </form>
              </body>
              </html>`

    response.writeHead(200, {'content-type': 'text/html'})
    response.write(html)
    response.end()
}).listen(3000)

console.log('server has started...')
