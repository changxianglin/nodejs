var fs = require('fs')

console.log('准备打开文件')

fs.open('text.txt', 'r+', (err, fd) => {
  if(err) {
    return console.log(err)
  }
  
  console.log('成功打开文件')
})