const express = require('express')
const app = express()
app.get('/', function(req, res) {
    res.end('Hello')
})

app.listen(3000, function() {
    console.log('Listen port 3000')
})