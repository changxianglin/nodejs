const http = require('http')
const parse = require('url').parse
const join = require('path').join
const fs = require('fs')

const root =  __dirname

const server = http.createServer(function(req, res) {
    var url = parse(req.url)
    var path = join(root, url.pathname)
    var stream = fs.createReadStream(path)
    stream.pipe(res)
    stream.on('error', function(err) {
        res.statusCode = 500
        res.end('Internal Server Error')
    })
})

server.listen(8090)