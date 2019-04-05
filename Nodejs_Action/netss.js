var net = require('net')

var server = net.createServer((socket) => {
  console.log('someone connects')

  server.maxConnections = 3

  server.getConnections((err, count) => {
    console.log('the count of client is ' + count)
  })
})

server.listen(18001, () => {
  console.log('server is listening')
})