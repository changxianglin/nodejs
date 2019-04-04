const util = require('util')

let obj = {
  keyWrod: 'node.js',
  name: 'huruji'
}

let str = util.inspect(obj)

console.log(str)