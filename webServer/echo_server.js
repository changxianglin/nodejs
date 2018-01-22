const net = require('net')
// const server = net.createServer(function(socket) {
//     socket.on('data', function(data){
//         socket.write(data)
//     })
// })
//
// server.listen(8888)

// 只响应一次
// const server = net.createServer(function(socket) {
//     socket.once('data', function(data) {
//         socket.write(data)
//     })
// })
//
// server.listen(8888)

const  EventEmitter = require('events').EventEmitter
const channel = new EventEmitter()

channel.on('join', function() {
    console.log('Welcome')
})

channel.emit('join')


