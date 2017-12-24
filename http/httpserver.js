const http = require('http')

const server = http.createServer((req, res) => {
    res.end(html)
})

var html = `<html>
            <h1>response</h1>
        </html>`

server.on('clientError', (err, socket) => {
    socket.end('HTTP/1.1 400 Bad Request\r\n\r\n')
})

server.listen(8080)