const connect = require('connect')
const app = connect()

app.use(logger(':method :url'))
    .use(hello)

function setup(format) {
    var regexp = /:(\w+)/g
    return function logger(req, res, next) {
        var str = format.replace(regexp, function(match, property) {
            return req[property]
        })
        console.log(str)
        next()
    }
}

function hello(req, res) {
    res.setHeader('Content-Type', 'text/plain')
    res.end('hello world')
}

module.exports = setup