const net = require('net')
const EventEmitter = require('events').EventEmitter
const channel = new EventEmitter()
channel.on('join', () => {
    console.log('Welcome!')
})

channel.emit('join')


const server = net.createServer((socket) => {
    socket.on('data', (data) => {
        socket.write(data)
    })
})

server.listen(8888)

console.log('Server running at http://localhost:8888/')