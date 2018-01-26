const http = require('http')
const parse = require('url').parse
const join = require('path').join
const fs = require('fs')

const root =  __dirname

const server = http.createServer(function(req, res) {
    var url = parse(req.url)
    var path = join(root, url.pathname)
    var stream = fs.createReadStream(path)
    stream.on('data', function(chunk) {
        res.write(chunk)
    })
    stream.on('end', function() {
        res.end()
    })
})

server.listen(8089)