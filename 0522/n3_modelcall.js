var http =  require('http')
var User = require('./user.js')
var Teacher = require('./teacher.js')
http.createServer( function(request, response){
    response.writeHead(200, {'Content-Type':'text/html; charset = utf-8'})
    if(request.url != '/favicon.ico'){
        teacher = new Teacher(1, 'zhangsan', 24)
        teacher.enter()
        teacher.teach(response)
        response.end('234234')
    }
}).listen(8000);
console.log('Server running 127.0.0.1:8000')