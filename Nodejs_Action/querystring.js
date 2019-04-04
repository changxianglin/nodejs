const querystring = require('querystring')
let str = 'keyWrod=node.js&name=huruji'

let obj = querystring.parse(str)
console.log(obj)