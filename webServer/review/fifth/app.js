const net = require('net')
const fs = require('fs')

const Request = require('./request')
const { log } = require('./utils')


const routeIndex = require('./routes/index')
const routeUser = require('./routes/user')
const routeMessage = require('./routes/message')
const routeTodo = require('./routes/todo')

const error = (code = 404) => {
    const e = {
        404: 'HTTP/1.1 404 NOT FOUND\r\n\r\n<h1>NOT FOUND</h1>'
    }
    const r = e[code] || ''
    return r
}

const responseFor = (raw, request) => {
    const route = {}

    const routes = Object.assign(route, routeIndex, routeUser, routeMessage, routeTodo)

    const response = routes[request.path] || error

    const resp = response(request)
    return resp
}

const processRequest = (data, socket) => {
    const raw = data.toString('utf8')
    const request = new Request(raw)
    const ip = socket.localAddress
    log(`ip and request, ${ip}\n${raw}`)


    const response = responseFor(raw, request)
    socket.write(response)
    socket.destroy()
}

const run = (host = '', port = 3000) => {
    const server = new net.Server()

    server.listen(port, host, () => {
        const address = server.address()
        log(`listening server at http://${address.address}:${address.port}`)
    })

    server.on('connection', (s) => {
        s.on('data', (data) => {
            processRequest(data, s)
        })
    })

    server.on('error', (error) => {
        log('server error', error)
    })

    server.on('close', () => {
        log('server closed')
    })
}

const __main = () => {
    run('127.0.0.1', 5000)
}

if(require.main === module) {
    __main()
}