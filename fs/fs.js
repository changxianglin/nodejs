const fs = require('fs')
const log = (...args) => {
    console.log.apply(console, args)
}

const fsFile = fs.createReadStream('test.md')

var data = ''

fsFile.setEncoding('utf-8')

fsFile.on('data', (chunk) => {
    data += chunk
})

fsFile.on('end', () => {
    log(data)
})

fsFile.on('error', (err) => {
    log(err.stack)
})

log('running over')