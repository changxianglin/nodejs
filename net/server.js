const net = require('net')
const log = console.log.bind(console)

const server = new net.Server()

const host = ''
const port = 2000

server.listen(port, host, () => {
    log('listen', server.address())
})

server.on('connection', (socket) => {
    const address = socket.remoteAddress
    const port = socket.remotePort
    const family = socket.remoteFamily
    log('connection client info', address, port, family)

    socket.on('data', (data) => {
        const r = data.toString()
        log('req to defined data', r, typeof(r))

        const response = 'HTTP/1.1 200 ok\r\nContent-Length: 12\r\n\r\nHello world!'
        socket.write(response)
    })
})



server.on('error', (error) => {
    log('server error', error)
})

server.on('close', () => {
    log('server closed')
})