const http = require('http')

var counter = 0

const server = http.createServer((req, res) => {
    counter++
    res.write('I have been accessed ' + counter + ' times.')
    res.end()
}).listen(8888)
