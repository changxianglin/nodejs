const fs  = require('fs')
const url = require('url')
const http = require('http')
const express = require('express')
const app = express()
const server = http.createServer(app)
const io = require('socket.io').listen(server)
const root = __dirname

app.use(function(req, res, next) {
    req.on('static', function() {
        var file = url.parse(req.url).pathname
        var mode = 'stylesheet'
        if(file[file.length - 1] == '/') {
            file += 'index.html'
            mode = 'reload'
        }
        reateWatcher(file, mode)
    })
    next()
})

app.use(express.static(root))

var watchers = {}

function createWatcher(file, event) {
    var absolute = path.join(root, file)

    if(watchers[absolute]) {
        return
    }
    fs.watchFile(absolute, function(curr, prev) {
        if(curr.mtime !== prev.mtime) {
            io.socket.emit(event, file)
        }
    })
    watchers[absolute] = true
}

server.listen(8080)