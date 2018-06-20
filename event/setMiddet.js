const EventEmitter = require('events')

class MyEventEmitter extends EventEmitter {}

const myEmitter = new MyEventEmitter()

myEmitter.on('event', (a, b) => {
    setImmediate(() => {
        console.log('这个是异步执行的')
    })
})

myEmitter.emit('event', 'a', 'b')