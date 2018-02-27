const net = require('net')
net.createServer(function(socket) {
    socket.write('Hello World!\r\n')
    socket.end()
}).listen(1337)

console.log('listening on port 1337')