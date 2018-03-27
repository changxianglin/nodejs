// 引入内置模块
const net = require('net')
const fs = require('fs')

// 自定义模块
const Request = require('./request')
const routeMapper = require('./routes')
const log = require('./utils')

// 错误请求的响应函数
const error = (code = 404) => {
    const e = {
        404: 'HTTP/1.1 404 NOT FOUND\r\n\r\n<h1>NOT FOUND</h1>',
    }
    const r = e[code] || ''
    return r
}

//解析 path
const parsedPath = (path) => {
    const index = path.indexOf('?')
    if(index === -1) {
        return {
            path: path,
            query: {}
        }
    } else {
        const l = path.split('?')
        const path = l[0]

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

// 生产 request 对应的响应函数
const responseFor = (request) => {
    const raw = request.raw
    const raws = raw.split(' ')

//    request 自定义对象，
    request.method = raws[0]
    let pathname = raws[1]
    let {path, query} = parsedPath(pathname)
    request.path = path
    request.query = query
    request.body = raws.split('\r\n\r\n')[0]
    log('path and query', path, query)

    const route = {}

    const routes = Object.assign(route, routeMapper)
    const response = routes[path] || error
    return response(request)
}

const run = (host = '', port = 3000) => {
    const server = new net.Server()

    server.listen(port, host, () => {
        const address = server.address()
        log(`listening server at http://${address.address}: ${address.port}`)
    })

    server.on('connection', (s) => {
        s.on('data', (data) => {
            const request = new Request()

            const r = data.toString('utf8')
            request.raw = r
            const ip = s.localAddress
            log(`ip and request, ${ip}\n${r}`)

            const response = responseFor(request)

            s.write(response)

            s.destroy()
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

__main()
