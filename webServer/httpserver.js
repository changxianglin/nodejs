const http = require('http')

const server = http.createServer(function(req, res) {
    var url = 'http://www.douban.com'
    var body = '<p>Redirecting to <a href=" ' + url + ' " >' + url + '</a></p>'
    res.setHeader('Location', url)
    res.setHeader('Content-Length', body.length)
    res.setHeader('Content-Type', 'text/plian')
    res.statusCode = 302
    res.end(body)
})

server.listen(8080)