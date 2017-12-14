const net = require('net')
const log = (...args) => {
    console.log.apply(console, args)
}

const client = new net.Socket()

const host = '127.0.0.1'
const port = 6000
client.connect(port, host, () => {
    log('connect', port, host)

    // const req = 'test.md'
    const req = './../test.js'
    client.write(req)
    // client.pipe(req)

})
client.on('data', (data) => {
    log('data...', data.toString())

    client.destroy()
})
