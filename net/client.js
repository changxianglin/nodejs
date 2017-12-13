const net = require('net')
const log = console.log.bind(console)

const client = new net.Socket()

const port = 2000
const host = '127.0.0.1'
// const host = '223.252.199.66'
client.connect(port, host, () => {
    log('connect to:', host, port)

    // const request = 'GET / HTTP/1.1\r\nHost: music.163.com\r\n\r\n'
    const request = 'client to link.'
    client.write(request)
})

client.on('data', (d) => {
    log('data', d.toString())

    client.destroy()
})

client.on('close', () => {
    log('connection closed')
})