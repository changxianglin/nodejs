const http = require('http')
const url = require('url')

http.createServer((request, response) => {
  let html = `
          <html>
          <head>
          <meta charset = "UTF-8" />
          </head>
          <body>
          <form action = "/" method = "get">
          <p>username: <input type = "text" name = "username" /></p>
          <p>password: <input type = "password" name = "password" /></p>
          <p>age: <input type = "text" name = "age" /></p>
          <p><input type = "submit" value = "submit" name = "submit" /></p>
          </form>
          </body>
          </html>
          `

    let query = url.parse( request.url, true ).query
    if(query.submit) {
      let data = `<p><a href = "/">back</a></p>
                  <p>username: ${query.username}</p>
                  <p>password: ${query.password}</p>
                  <p>age: ${query.age}</p>`

      response.writeHead(200, {'content-type': 'text/html'})
      response.write(data)
    } else {
      response.writeHead(200, {'content-type': 'text/html'})
      response.write(html)
    }
    response.end()
}).listen(3000)

console.log('server has started ...')
