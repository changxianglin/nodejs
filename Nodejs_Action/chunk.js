const http = require('http')

const server = http.createServer((req, res) => {
  let data = ''
  req.on('data', (chunk) => {
    data += chunk
  })

  req.on('end', () => {
    let method = req.method
    let url = req.url
    let headers = JSON.stringify(req.headers)
    let httpVersion = req.httpVersion
    res.writeHead(200, {
      'content-type': 'text/html'
    })
    let dataHtml = '<p>data: ' + data + '</p>'
    let methodHtml = '<p>method:' + method + '</p>'
    let urlHtml = '<p>url: ' + url + '</p>'
    let headersHtml = '<p>headers: ' + headers + '</p>'
    let httpVersionHtml = '<p>httpVersion: ' + httpVersion + '</p>'
    let resData = dataHtml + methodHtml + urlHtml + headersHtml + httpVersionHtml
    
    res.end(resData)
  })
})

server.listen(3000, () => {
  console.log('listening port 3000')
})