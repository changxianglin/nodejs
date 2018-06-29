const Koa = require('koa');
const app = new Koa();
const path = require('path')
const fs = require('fs')

app.use(async ctx => {
    let time = new Date()
    fs.appendFileSync('message.txt', time + '\n');
    let content = fs.readFileSync('message.txt')
    const len = 43
    let count = content.toString().length / len
    ctx.body = 'Hello World';
    console.log("第" + (count + 1) + "访问" )
});

app.listen(3000);