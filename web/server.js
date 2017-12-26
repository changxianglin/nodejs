const http = require('http')
const url = require('url')
const fs = require('fs')
const querystring = require('querystring')
// const query = url.parse(req.url, true).query
// http.createServer((req, res) => {
//     res.writeHead(200, {'Content-Type': 'text/plain'})
//     res.end('Hello World\n')
// }).listen(1337, '127.0.0.1')
// console.log('Server running at http://127.0.0.1:1337/')
// const update = (num1, num2) => {
//     num1 + num2
// }
// http.createServer((req, res) => {
//     switch(req.method) {
//         case 'POST':
//             update(req, res)
//             break
//         case 'DELETE':
//             update(req, res)
//             break
//         case 'PUT':
//             update(req, res)
//             break
//         case 'GET':
//             update(req, res)
//             break
//     }
// }).listen(2000, '127.0.0.1')
//
// console.log('server running')


// http.createServer((req, res) => {
//     var pathname = url.parse(req.url).pathname
//     fs.readFile(path.join(ROOT, pathname), (error, file) => {
//         if (err) {
//             res.writeHead(404)
//             res.end('找不到相关文件。--')
//             return
//         }
//         res.writeHead(200)
//         res.end(file)
//     })
// }).listen('2000', '127.0.0.1')

// console.log('server running.')
// test
http.createServer(function (req, res) {
    const pathname = url.parse(req.url).pathname
    const paths = pathname.split('/')
    const controller = path[1] || 'index'
    const action = path[2] || 'index'
    const args = path.slice(3)
    if (handles[controller] && handles[controller][action]) {
        handlers[controller][action].apply(null, [req, res].concat(args))
    } else {
        res.writeHead(500)
        res.end('找不到响应控制器')
    }
}).listen('2000', '127.0.0.1')
handles.index = {}
handles.index.index = function(req, res, foo, bar) {
    res.writeHead(200)
    res.end(foo)
}
