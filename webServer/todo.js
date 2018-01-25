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
    }
})

server.listen(8080)