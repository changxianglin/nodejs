const net = require('net')
const fs = require('fs')


// 引入封装之后的 request

const Request = require('./request')
const routeMapper = require('./routes')
const log = require('./utils')


const error = (code = 404) => {
    const e = {
        404: 'HTTP/1.1 404 NOT FOUND\r\n\r\n<h1>NOT FOUND</h1>'
    }
    const r = e[code] || ''
    return r
}


// 解析 path 的函数
// path 的可能取值

const parsedPath = (path) => {

    const index = path.indexOf('?')

    if(index === -1) {
        return {
            path: path,
            query: {},
        }
    } else {

        const l = path.split('?')
        path = l[0]

        const search = l[1]
        const args = search.split('&')
        const query = {}
        for(let arg of args) {
            const [k, v] = arg.split('=')
            query[k] = v
        }
        return {
            path: path,
            query: query,
        }
    }
}

const parsedRaw = (raw) => {
    const r = raw
    const line  = r.split(' ')
    const method = line[0]
    const url = line[1]

    const {path, query} = parsedPath(url)
    const message = r.split('\r\n\r\n')
    const headers = message[0].split('\r\n').slice(1)
    const body = message[1]

    return {
        method: method,
        path: path,
        query: query,
        headers: headers,
        body: body,
    }
}


const responseFor = (raw, request) => {
    const r = parsedRaw(raw)
    request.method = r.method
    request.path = r.path
    request.query = r.query
    request.body = r.body

    request.addHeaders(r.headers)
    log('path and query', r.path, r.query)

    const route = {}

    const routes = Object.assign(route, routeMapper)

    const response = routes[r.path] || error

    const resp =  response(request)
    return resp
}

// 开启一个服务

const run = (host = '', port = 3000) => {

    const server = new net.Server()

    server.listen(port, host, () => {

        const address = server.address()

        log('address', address)
        log(`listening server at http://${address.address}:${address.port}`)
    })

    server.on('connection', (s) => {

        s.on('data', (data) => {

        const request = new Request()

        const r = data.toString('utf8')

        const ip = s.localAddress

        log(`ip and request, ${ip}\n${r}`)

    const response = responseFor(r, request)

    s.write(response)

    s.destroy()
    })
    })

    server.on('error', (error) => {

        log('server error' , error)
    })
    }



// 入口程序

const  __main = function() {
    run('127.0.0.1', 5000)
}

__main()