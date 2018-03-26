// 引入模块
const net = require('net')
const fs = require('fs')

//自定义　log
const log = (...args) => {
    console.log.apply(console, args)
}

const routeIndex = () => {
    const header = 'HTTP/1.1 200 OK\r\nContent-Type: text/html\r\n'
    const body = '<h1>Hello World</h1><img src = "doge.gif">'

    const r = header + '\r\n' + body
    return r
}

const routeImage = () => {
    const header = 'HTTP/1.1 200 OK\r\nContent-Type: image/gif\r\n\r\n'
    const file = 'doge.gif'

    const body = fs.readFileSync(file)

    const h = Buffer.from(header)
    const r = Buffer.concat([h, body])
    return r
}

const error = (code = 404) => {
    const e = {
        404: 'HTTP/1.1 404 NOT FOUND\r\n\r\n<h1>NOT FOUND</h1>',
    }
    const r = e[code] || ''

    return r
}

const responseForPath = (path) => {
    const r = {
        '/': routeIndex,
        '/doge.gif': routeImage,
    }

    const response = r[path] || error
    return response()
}

const run = (host = '', port = 3000) => {
    const server = new net.Server()

    server.listen(port, host, () => {
        const address = server.address()
        console.log('listening.', address)
    })

    server.on('connection', (s) => {
        s.on('data', (data) => {
            const request = data.toString('utf8')
            const ip = s.localAddress
            log(`ip and request, ip 的值: ${ip}\nrequest 的内容\n${request}`)

            const path = request.split(' ')[1]
            log('path', path)

            const response = responseForPath(path)

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

// 程序的入口
const __main = () => {
    run('127.0.0.1', 4000)
}

__main()