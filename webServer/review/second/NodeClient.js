const net = require('net')


const host = 'blog.163.com'
const port = 80


const client = new net.Socket()

client.connect({port, host}, () => {
    console.log('now connect to ', host, port)

    const request = 'GET / HTTP/1.1\r\nHost: blog.163.com\r\n\r\n'

    client.write(request)
})

client.on('data', (data) => {
    console.log('respone data', data.toString())

    client.destroy()
})

client.on('close', () => {
    console.log('connect closed')
})