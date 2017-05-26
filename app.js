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

// fs.readFile('./hello.txt', 'utf8', function(err, data){
//     if(err){
//         console.error(err)
//     } else {
//         console.log(data)
//     }
// })

// fs.writeFile('./hello.txt', '这里是一个神奇的地方.',{
//     flag: 'w'
// }, function (err) {
//     console.log(err)
// })

// const rs = fs.createReadStream('./hello.txt')
// rs.on('data', function(chunk){
//     console.log(chunk.toString())
// })
// const rs = fs.createReadStream('./15.jpg')
// let count = 1;
// var  result
// rs.on('data', function(chunk){
//     console.log(chunk)
//     let counts = count++
//     // console.log(counts)
//     result += chunk
// })
// rs.on('end', function(){
//     console.log(result)
// })