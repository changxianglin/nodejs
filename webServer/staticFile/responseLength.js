const http = require('http')
const parse = require('url').parse
const join = require('path').join
const fs = require('fs')

const root =  __dirname

const server = http.createServer(function(req, res) {
    var url = parse(req.url)
    var path = join(root, url.pathname)
    fs.stat(path, function(err, stat) {
        if(err) {
            if('ENOENT' == err.code) {
                res.statusCode = 404
                res.end('Not Found')
            } else {
                res.statusCode = 500
                res.end('Internal Server Error')
            }
        } else {
            res.setHeader('Content-length', stat.size)
            var stream = fs.createReadStream(path)
            stream.pipe(res)
            stream.on('error', function(err) {
                res.statusCode = 500
                res.end('Internal Server Error')
            })
        }
    })
})

server.listen(1024)