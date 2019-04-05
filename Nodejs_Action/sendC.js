var net = require('net')

var server = net.createServer((socket) => {
  var address = server.address()
  var message = 'client, then server addres is ' + JSON.stringify(address)

  socket.write(message, () => {
    var writeSize = socket.bytesWritten
    console.log(message + 'has send')
    console.log('the size of message is ' + writeSize)
  })

  socket.on('data', (data) => {
    console.log(data.toString())
    var readSize = socket.bytesRead
    console.log('the size of data is ' + readSize)
  })
})

server.listen(18001, () => {
  console.log('server is listening')
})