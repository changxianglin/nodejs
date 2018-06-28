const Koa = require('koa');
const path = require('path')
const fs = require('fs')

const app = new Koa();

app.use(async (ctx, next) => {
    await next();
    let content = fs.readFileSync('index.html', 'utf8').toString()
    ctx.response.type = 'text/html';
    ctx.response.body = content
});

// 在端口3000监听:
app.listen(3000);
console.log('app started at port 3000...');
