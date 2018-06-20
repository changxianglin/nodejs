const EventEmitter =  require('events')

class MyEmitter extends EventEmitter{}

const myEmitter = new MyEmitter()

myEmitter.on('event', () => {
    console.log('一个事件被触发')
})

myEmitter.emit('event')

// EventEmitter.on() 监听一个事件
// EventEmitter.emit() 触发一个事件
