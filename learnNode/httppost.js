const http = require('http')
const querystring = require('querystring')

http.createServer((request, response) => {
  let html = `
            <html>
            <head>
            <meta charset="UTF-8" />
            </head>
            <body>
            <form action="/" method = "post">
            <p>username: <input type = "text" name = "username" /></p>
            <p>password: <input type = "password" name = "password" /></p>
            <p>age: <input type = "text" name = "age" /></p>
            <p><input type = "submit" value = "submit" name = "submit" /></p>
            </form>
            </body>
            </html>
            `

    if(request.method.toLowerCase() == 'post') {
      let postData = ''

      request.addListener('data', (chunk) => {
        postData += chunk
      })

      request.addListener('end', () => {
        let data = querystring.parse(postData)
        console.log('postData: ' + postData)
        console.log(data)

        let s = `<p><a href = "/">back</a></p>
                <p>username: ${data.username}</p>
                <p>password: ${data.password}</p>
                <p>age: ${data.age}</p>
                `

        response.writeHead(200, {'content-type': 'text/html'})
        response.write(s)
        response.end()
      })
    } else {
      response.writeHead(200, {'content-type': 'text/html'})
      response.write(html)
      response.end()
    }
}).listen(3000)

console.log('server has started...')
