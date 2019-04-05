var net = require('net')

var server = new net.Server()

server.on('connection', (socket) => {
  console.log('someone connects')
})

server.listen(18001)

server.on('listening', () => {
  console.log('server is listening')
})

server.on('close', () => {
  console.log('server closed')
})

server.on('error', (err) => {
  console.log('error')
})