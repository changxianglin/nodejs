const net = require('net')
const fs = require('fs')
const log = console.log.bind(console)

const show = (options) => {
    // let file = 'test.md'
    // let msg = fs.readFileSync(file)
    // let msgs = msg.toString()
    // log(msgs)
    let msg = fs.readFileSync(options, (err, data) => {
       // if (err) {
       //     log(err)
       //     let msg = 'your send path is error'
       // }
        log(data.toString())
        let msg = data.toString()
    })
    return msg
}

const server = new net.Server()

// const host = ''
// const port = 6000

server.listen(port = 6000, host = '127.0.0.1', () => {
    log('监听端口', server.address())
})

server.on('connection', (socket) => {
    const address = socket.remoteAddress
    const port = socket.remotePort
    const family = socket.remoteFamily
    log('connection client info', address, port, family)

    socket.on('data', (data) => {
        // const r = data.toString()
        // const r = show('./../Socket.md')
        const req = data.toString()
        log(req)
        const path = req
        // const path = 'test.md'
        const r = show(path)

        log('req to defined data', r.toString(), typeof(r))
        socket.write(r)
        // socket.write(r)
        // const response = 'HTTP/1.1 200 ok\r\nContent-Length: 12\r\n\r\nHello world!'
        // socket.write(response)
    })
})