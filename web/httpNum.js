const http = require('http')

var counter = 0

const server = http.createServer((req, res) => {
    counter++
    // 可以接入 数据库
    res.write('I have been accessed ' + counter + ' times.')
    res.end()
}).listen(8888)
