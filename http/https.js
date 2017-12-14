const https = require('https')
const fs = require('fs')

const options = {
    host : '115.182.201.6',
    port: 443,
    path: '/',
    method: 'GET',
}

// options.agent = new http.agent(options)

const req = https.request(options, (res) => {
    res.setEncoding('utf-8')
    res.on('data', (data) => {
        console.log(data)
    })
})
req.end()

req.on('error', (e) => {
    console.log(e)
})