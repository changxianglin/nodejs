var net = require('net')

var server = net.createServer((socket) => {

  console.log('localPort: ' + socket.localPort)

  console.log('localAdress: ' + socket.localAddress)

  console.log('remotePort: ' + socket.remotePort)

  console.log('remoteFamily: ' + socket.remoteFamily)

  console.log('remoteAddress: ' + socket.remoteAddress)
})

server.listen(18001, () => {
  console.log('server is listening')
})