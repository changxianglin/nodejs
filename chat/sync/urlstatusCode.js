const url = 'http://douban.com'
var body = '<p>Readirctin to <a href = "' + url + '">' + url +
    '</a></p>'
res.setHeader('location', url)
res.setHeader('Content-Length', body.length)
res.setHeader('Content-Type', 'text/html')
res.statusCode = 302
res.end(body)