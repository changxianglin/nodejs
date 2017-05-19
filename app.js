// 核心逻辑的程序入口

const fs = require('fs')
class App {
    constructor(){

    }
    initServer(request, response)  {
    // let string = JSON.stringify(require('./package'))
    // respose.write('1,2,3')
        fs.readFile('./public/index.html', 'utf8', (error, data) => {
            response.end(data)
        })

}
}

module.exports =  App