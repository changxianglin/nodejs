const http = require('http')
const url = require('url')
var items = []

const server = http.createServer(function(req, res) {
    switch (req.method) {
        case 'POST':
            var item = ''
            req.setEncoding('utf-8')
            req.on('data', function(chunk) {
                item + chunk
            })
            req.on('end', function() {
                items.push(item)
                res.end('OK\n')
            })
            break
        case 'GET':
            items.forEach(function(item, i) {
                res.write(i + ' ) ' + item  + '\n')
            })
            res.end()
            break
        case 'DELETE':
            var path = url.parse(req.url).pathname
            var i = parseInt(path.slice(1), 10)

            if(isNaN(i)) {
                res.statusCode = 400
                res.end('Invalid item id')
            } else if(!items[i]) {
                res.statusCode = 404
                res.end('Item not found')
            } else {
                items.splice(i, 1)
                res.end('ok\n')
            }
            break
        case 'PUT'
            var path = url.parse(req.url).pathname
            var i = parseInt()
            break
    }
})

server.listen(8080)