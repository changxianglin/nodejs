var http =  require('http')
var url = require('url')
var router = require('./router')
// var User = require('./user.js')
// var Teacher = require('./teacher.js')
http.createServer( function(request, response){
    response.writeHead(200, {'Content-Type':'text/html; charset = utf-8'})
    if(request.url != '/favicon.ico'){
        var pathname = url.parse(request.url).pathname
        pathname = pathname.replace(/\//, '')
        console.log(pathname)
        router[pathname](request, response)
        // teacher = new Teacher(1, 'zhangsan', 24)
        // teacher.enter()
        // teacher.teach(response)
        response.end('')
    }
}).listen(7000);
console.log('Server running 127.0.0.1:7000')