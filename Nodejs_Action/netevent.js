var net = require('net')

var server = net.createServer((socket) => {
  console.log('someone connects')
})

server.listen(18001)

server.on('listening', () => {
  console.log('server is listening')
})