const http = require('http')
let reqData = ''

http.get({
  'host': '127.0.0.1',
  'port': '3000'
}, (res) => {
  res.on('data', (chunk) => {
    reqData += chunk
  })
  res.on('end', () => {
    console.log(reqData)
  })
}).end()