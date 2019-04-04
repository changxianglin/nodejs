const http = require('http')
let reqData = ''

let option = {
  'host': '127.0.0.1',
  'port': '3000'
}

const req = http.createServer(option)

req.on('response', (res) => {
  res.on('data', (chunk) => {
    reqData += chunk
  })
  res.on('end', () => {
    console.log(reqData)
  })
})