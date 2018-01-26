const http = require('http')
const parse = require('url').parse
const join = require('path').join
const fs = require('fs')
const root =  _dirname

const server = http.createServer(function(req, res) {
    var url = parse(req.url)
    var path = join(root, url.pathname)
})

server.listen(8888)