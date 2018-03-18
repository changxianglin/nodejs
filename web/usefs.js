// 读写
var fs = require('fs')
var path = require('path')
fs.readFile(path.join(__dirname, '/data/costomers.csv'), {encoding: 'utf-8'},
  function(err, data) {
    if(err) throw err
    console.log(data)
  })

// 写入
  var fs = require('fs')
  fs.creadReadStream('./data/customers.csv').pipe(process.stdout)
