// 核心逻辑的程序入口

const fs = require('fs')
class App {
    constructor(){

    }
    initServer(){
        //初始化工作
        // const packages = require('./public/index.txt')

        return(request, response) => {
            fs.readFile('./public/index.html', 'utf8', (error, data) => {
                response.end(data)
        })
        }
}
}

module.exports =  App