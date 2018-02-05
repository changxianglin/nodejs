const connect = require('connect')
const app = connect()
app.use(logger)
app.listen(8090, function () {
    console.log('Listen port in 8090.')
})
function logger(req, res, next) {
    console.log('%s%s',req.method, req.url)
    next()
}

function hello(req, res) {
    res.setHeader('Content-Type', 'text/plain')
    res.end('hello world')
}
