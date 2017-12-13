const http = require('http')
const tls = require('tls')
const log = console.log.bind(console)

const host = 'movie.douban.com'
const port = 443

const client = new tls.TLSSocket()
client.connect(port, host, () => {
    log('connect to : ', host, port)
    const request = 'GET / HTTP/1.1\r\nHost: movie.douban.com\r\n\r\n'
    client.write(request)
})

client.on('data', (d) => {
    log('data', d.toString())

    client.destroy()
})

client.on('close', () => {
    log('connetion closed')
})