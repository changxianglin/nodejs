const fs = require('fs')
const log = (...args) => {
    console.log.apply(console, args)
}

const makeNum = (num) => {
    var arr = num + '  running funciton'

    return arr
}

const fsWrite = fs.createWriteStream('fswrite.txt')
var data = makeNum('zhangsan')

fsWrite.write(data, 'utf-8')

fsWrite.end()

fsWrite.on('finish', () => {
    log('write finish')
})

fsWrite.on('error', (err) => {
    log(err.stack)
})

log('running over')