var net = require('net')

var server = net.createServer((socket) => {
  socket.on('data', (data) => {
    console.log(data.toString())
  })
})

server.listen(18001, () => {
  console.log('server is listening')
})