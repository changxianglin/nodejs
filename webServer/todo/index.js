const http = require('http')
const formidable = require('formidable')

 const server = http.createServer(function(req, res) {
     switch (req.method) {
         case 'GET':
             show(req,res)
             break
         case 'POST':
             upload(req, res)
             break
     }
 })

server.listen(8098)
console.log('listen port 8098')

function show(req, res) {
    var html = '' + '<form method = "post" action = "/" enctype = "multipart/form-data"> ' +
        '<p><input type = "text" name = "name"></p>' +
        '<p><input type = "file" name = "file"></p>' +
        '<P><input type = "submit" name = "Upload"></P>'
        '</form>'

    res.setHeader('Content-Type', 'text/html')
    res.setHeader('Content-Length', Buffer.byteLength(html))
    res.end(html)
}

// function upload(req, res) {
//     if(!isFormData) {
//         res.statusCode = 400
//         res.end('Bad Request: expecting multipart/form-data')
//     }
//     return
// }

function upload(req, res) {
    if(!isFormData) {
        res.statusCode = 400
        res.end('Bad Request')
        return
    }
    var form = new formidable.IncomingForm()
    // form.on('filed', function(field, vlaue) {
    //     console.log(filed)
    //     console.log(value)
    // })
    // form.on('file', function(name, file) {
    //     console.log(name)
    //     console.log(file)
    // })
    // form.on('end', function() {
    //     res.end('upload complate!')
    // })
    // form.parse(req)
    form.parse(req, function(err, fields, files) {
        console.log(fields)
        console.log(files)
        res.end('upload complete')
    })
    form.on('progress', function (bytesReceived, bytesExpecte) {
        var percent = Math.floor(bytesReceived / bytesExpecte * 100)
        console.log(percent)
    })
}

function isFormData(req) {
    var type = req.headers['content-type'] || ''
    return 0 == type.indexOf('multipart/form-data')
}

