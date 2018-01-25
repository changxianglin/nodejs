const http = require('http')

const server = http.createServer(function(req, res) {
    req.setEncoding('utf8')
    req.on('data', function(chunk) {
        console.log('parsed', chunk)
    })
    req.on('end', function(){
        console.log('done parsing')
        res.end()
    })
})