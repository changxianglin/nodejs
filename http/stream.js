const net = require('net')
const log = (...args) => {
    console.log.apply(console, args)
}

var server  = net.createServer((socket) => {
    socket.write('Echo server\r\n')
    socket.pipe(socket)
})

server.listen(1337, '127.0.0.1')