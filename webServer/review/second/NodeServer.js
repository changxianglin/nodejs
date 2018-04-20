const net = require('net')

const fs = require('fs')


const log = (...args) => {
    console.log.apply(console, args)
}


const error = (code = 404) => {
    const e = {
        404: 'HTTP/1.1 NOT FOUND\r\n\r\n<h1>NOT FOUND</h1>'
    }

    const r = e[code] || ''
    return r
}

const routeIndex = () => {
    const header = 'HTTP/1.1 200 OK\r\nContent-Type: text/html\r\n'

    const body = '<h1>Hello World</h1><img src="doge.gif>"'

    const r = header + '\r\n' + body
    return r
}

const routeImage = () => {
    const header = 'HTTP/1.1 200 OK\r\nContent-Type: image/gif\r\n\r\n'
    const file = 'doge.gif'

    const body = fs.readFileSync(file)
    const h = Buffer.form(header)
    const r = Buffer.concat([h, body])

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
        console.log('listening', address)
    })

    server.on('connection', (socket) => {
        socket.on('data', (data) => {
             const request = data.toString('utf8')
             const ip = socket.localAddress
             log(`ip and request, ip 的值: ${ip}\nrequest 的内容\n${request}`)

            const path = request.split(' ')[1]
            log('path', path)

            const response = responseForPath(path)

            socket.write(response)
    })
    })

    server.on('error', (err) => {
        console.log('error', err)
    })

    server.on('close', () => {
        console.log('closed')
    })
}




const __main = () => {
    run('0.0.0.0', 5000)
}

__main()