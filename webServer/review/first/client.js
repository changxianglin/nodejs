const net = require('net')

const host = '127.0.0.1'
const port = 2000

const client = new net.Socket()

client.connect(port, host, () => {
    console.log('connect to: ', host, port)

    const request = 'GET / HTTP/1.1\r\nHost: localhost\r\n\r\n'
    client.write(request)


})

client.on('data', (d) => {
    console.log('data:', d.toString())

    client.destroy()
})

client.on('close', () => {
    console.log('connection closed')
})

