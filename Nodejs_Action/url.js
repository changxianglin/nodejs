const url = require('url')
let parserUrl = 'http://www.google.com/?q=node.js'

let urlObj = url.parse(parserUrl)
console.log(urlObj)