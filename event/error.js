const EventEmitter = require('events')

class MyEventEmitter extends EventEmitter {}

const myEmitter = new MyEventEmitter()


myEmitter.on('error', (err) => {
    console.log('有错误')
})

myEmitter.emit('error', new Error('whoops!'));

