const net = require('net')

const host = ''
const port = 2000

const server = new net.Server()


server.listen(port, host, () => {
    console.log('listening', server.address())
})

server.on('connection', (socket) => {
    const address = socket.remoteAddress

    const port = socket.remotePort
    const family = socket.remoteFamily
    console.log('connected client to info', address, port, family)

    socket.on('data', (foo) => {

        const r = foo.toString()
        console.log('接受到的原始数据', r, typeof(r))

        const response = 'HTTP/1.1/'
    })
})

server.on('error', () => {
    console.log('server error', error)
})

server.on('close', () => {
    console.log('server closed')
})

