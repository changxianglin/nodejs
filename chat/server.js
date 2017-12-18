const http = require('http')
const fs = require('fs')
const path = require('path')
const mime = require('mime')
const cache = {}
const chatServer = require('./lib/chat_server')
chatServer.listen(server)

function send404(response) {
    response.writeHead(404, {'Content-Type': 'text/plain'})
    response.write('Error 404: resource not found.')
    response.end()
}

function sendFile(response, filePath, fileContents) {
    response.writeHead(200, {'content-type': mime.lookup(path.basename(filePath))})
    response.end(fileContents)
}

function serverStatic(response, cache, absPath) {
    if(cache[absPath]) {
        sendFile(response, absPath, cache[absPath])
    } else {
        fs.exists(absPath, function(exists) {
            if (exists) {
                fs.readFile(absPath, function(err, data) {
                    if(err) {
                        send404(response)
                    } else {
                        cache[absPath] = data
                        sendFile(response, absPath, data)
                    }
                })
            } else {
                send404(response)
            }
        })
    }
}

const server = http.createServer( function(request, response) {
    var filePath = false
    if (request.url == '/') {
        filePath = 'public/index.html'
    } else {
        filePath = 'public' + request.url
    }

    var absPath = './' + filePath
    serverStatic(response, cache, absPath)
})

server.listen(8080, function() {
    console.log('Server listening on port 8080.')
})