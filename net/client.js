const net = require('net')
const log = console.log.bind(console)

const client = new net.Socket()

const port = 80
const host = '223.252.199.66'
client.connect(port, host, () => {
    log('connect to:', host, port)

    const request = 'GET / HTTP/1.1\r\nHost: music.163.com\r\n\r\n'
    client.write(request)
})

client.on('data', (d) => {
    log('data', d.toString())

    client.destroy()
})

client.on('close', () => {
    log('connection closed')
})