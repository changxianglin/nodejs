const net = require('net')
const log = console.log.bind(console)

const client = new net.Socket()

<<<<<<< HEAD
const port = 3000
const host = '127.0.0.1'
=======
const port = 2000
const host = '127.0.0.1'
// const host = '223.252.199.66'
>>>>>>> da94acc1d62be6c903da963004f33284ebd9baa1
client.connect(port, host, () => {
    log('connect to:', host, port)

    // const request = 'GET / HTTP/1.1\r\nHost: music.163.com\r\n\r\n'
<<<<<<< HEAD
    const request = 'client send data to server.'
=======
    const request = 'client to link.'
>>>>>>> da94acc1d62be6c903da963004f33284ebd9baa1
    client.write(request)

})

client.on('data', (d) => {
    log('data', d.toString())

    client.destroy()
})

client.on('close', () => {
    log('connection closed')
})

// 引入模块
// 创建客服端
// 按照约定链接服务器、发送数据
// 监听返回数据、及数据接收完成
// 监听服务器关闭