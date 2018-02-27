const net = require('net')
const socket = net.connect({port: 1337, host: 'localhost'})
socket.on('connect', function() {
    socket.write('HELO local.domain.name\r\n')
})