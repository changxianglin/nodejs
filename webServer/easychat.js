const events = require('events')
const net = require('net')
const channel = new events.EventEmitter()
channel.clients = {}
channel.subscriptions = {}

channel.on('join', function(id, client) {
    this.clients[id] = client
    this.subscriptions[id] = function(senderId, message) {
        if(id != senderId) {
            this.clients[id].write(message)
        }
    }
    this.on('broadcast', this.subscriptions[id])
})

const server = net.createServer(function(client) {
    var id = client.remoteAddress + ':' + client.remotePort
    client.on('connect', function() {
    channel.emit('join', id, client)
    })
    client.on('data', function(data) {
        data = data.toString()
        channel.emit('broadcast', id, data)
    })
})

server.listen(8080)