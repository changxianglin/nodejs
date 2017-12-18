const http = require('http')
const url = require('url')
var items = []

var server = http.createServer((req, res) => {
    switch(req.method) {
        case 'POST':
            var items = ""
            req.setEncoding('utf-8')

            req.on('data', (chunk) => {
                item += chunk
            })

            req.on('end', () => {
                items.push(item)
                res.end('OK\n')
            })

            break
    }
})
server.listen(9000, '127.0.0.1')

console.log('server running at htt://localhot:9000/')