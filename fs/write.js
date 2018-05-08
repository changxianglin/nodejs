var fs = require('fs')
var content = 'Hello World! and wrte content'
fs.writeFile('message.txt', content, function(err) {
    if(err) throw err
    console.log('Writing is done')
})