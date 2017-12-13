const net = require('net')
const log = console.log.bind(console)

const server = net.createServer((socket) => {
    log('client connected')

    socket.on('end', () => {
        log('client disconnected')
    })
    socket.write('This is zhangsan\r\n')
    socket.pipe(socket)
})

server.on('error', (err) => {
    throw err
})

server.listen(3000, () => {
    log('server bound')
})