var log = console.log.bind(console)

var foo = function() {
    console.log(123)
}
foo()

var bar = function() {
    console.log(223)
}

bar()

var baz = function(s, f) {
    log(s + f)
    return s + f
}

baz(123, 456)

var website = function(a, b, c, d, e) {
    log(arguments)
    return arguments[0] + arguments[1]
}

website(1, 2, 3, 4, 5)

var rouzi = function() {
    log('fack you !')
}

rouzi()

// use it to work
// very good

// var http = require('http')
//
// http.createServer(function(req, res) {
//     res.writeHead(200, {'Content-Type': 'text/plain'})
//     res.end('welcome,zhourong!')
// }).listen(3000)
//
// log('Server is running.')

// var http = require('http')
// var url = require('url')
// var util = require('util')
//
// http.createServer(function(req, res) {
//     res.writeHead(200, {'Content-Type': 'text/plain; charset = utf-8'})
//     res.end(util.inspect(url.parse(req.url, true)))
// }).listen(3000)
//
var http = require('http')
var util = require('util')
var querystring = require('querystring')

http.createServer(function(req, res) {
    var post = ''

    req.on('data', function(chunk) {
        post += chunk
    })
    req.on('end', function() {
        post = querystring.parse(post)
        res.end(util.inspect(post))
    })
}).listen(3000)

// var mysql = require('mysql')
// var connection = mysql.createConnection({
//     host: 'localhost',
//     user: 'root',
//     password:'zhangsan',
//     database: 'test'
// })
// connection.connect()
//
// var sql = 'SELECT * FROM website'
//
// connection.query(sql, function(err, result) {
//     if (err) {
//         log('[SELECT ERROR] - ', err.message)
//         return
//     }
//
//     log('------------------SELECT-------------------')
//     log(result)
//     log('------------------------------------\n\n')
// })
//
// connection.end()

