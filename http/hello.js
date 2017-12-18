const http = require('http')
const fs = require('fs')

// http.createServer((req, res) => {
//     res.writeHead(200, {'Content-Type': 'text/plain'})
//     res.end('Hello, Zhangsan\n')
// }).listen(3000)
//
// console.log('Server running at http://localhost:3000/')

const server = http.createServer()
server.on('request', (req, res) => {
    res.writeHead(200, {'Content-Type': 'text/plain'})
    res.end('yeah, Zhourong\n')
})
server.listen(3000)
console.log('Server running at http://localhost:3000/')

// const stream = fs.createReadStream('./sesource.json')
// stream.on('data', (chunk) => {
//     cosole.log(chunk)
// })
// stream.on('end', () => {
//     console.log('finished')
// })