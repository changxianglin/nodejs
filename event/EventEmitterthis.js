const EventEmitter = require('events')

class MyEventEmitter extends EventEmitter{}

const myEmitter = new MyEventEmitter()

myEmitter.on('event', function (a, b) {
    console.log(a, b, this)
})

myEmitter.emit('event', 'a', 'b')