const EventEmitter = require('events')

class MyEventEmitter extends EventEmitter {}

const myEmitter = new MyEventEmitter()

let m = 0;

myEmitter.once('event', (a, b) => {
    console.log(++m)
})

myEmitter.emit('event', 'a', 'b')

myEmitter.emit('event', 'a', 'b')