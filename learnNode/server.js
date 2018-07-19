const http = require('http')
const url = require('url')
const starter = require('./starter')
const uploader = require('./uploader')

http.createServer((request, response) => {
  let pathname = url.parse(request.url).pathname
  let routerurl = {
    '/': starter.start,
    '/show': uploader.upload,
  }

  if(typeof routerurl[pathname] === 'function') {
    routerurl[pathname](request, response)
  } else {
    console.log('404 not found!')
    response.end()
  }
}).listen(3000)

console.log('server has started ...')
