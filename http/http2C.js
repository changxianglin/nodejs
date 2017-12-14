const http = require('http')
const log = console.log.bind(console)

const agent = new http.Agent({
    maxSockets:10
})
const options = {
    hostname: '127.0.0.1',
    port: 1337,
    path: '/',
    mothod: 'GET',
    agent: agent,
}

const req = http.request(options, (res) => {
    log('STATUS: ' + res.statusCode)
    log('HEADERS: ' + JSON.stringify(res.headers))
    res.setEncoding('utf-8')
    res.on('data', (chunk) => {
        log(chunk)
    })
})

req.end()