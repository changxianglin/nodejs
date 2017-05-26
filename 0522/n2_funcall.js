var http = require('http')
var otherfun = require('/models/otherufuns.js')
http.createServer(function(request, response){
    response.writeHead(200, {'Content-Type': 'text/html; charset = 'utf-8'})
    if(request.url !=  '/favicon.ico'){
        otherfun.contoller(request, response)
        otherfun.call(response)
        response.end('')
    }
}).listen(8000)
console.log('Server running at 127.0.0.0:80000')
function fun1 (res){
        console.log('fun1')
    res.write('hello woui fun1')
}
    }

