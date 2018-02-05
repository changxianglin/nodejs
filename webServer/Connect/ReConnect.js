const connect = require('connect')

connect()
    .use(function hello(req, res) {
        foo()
        res.setHeader('Content-Type', 'text/plain')
        res.end('hello world')
    })
    .use(3000, function () {
        console.log('response re')
    })
