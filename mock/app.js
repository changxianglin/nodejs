const fs = require('fs')
const koa = require('koa')
const router = require('koa-router')

const app = new koa()
const routers = new router()
app.use(routers.routes())
app.use(routers.allowedMethods());

routers.get('/protest', (ctx) => {
    let content = fs.readFileSync('test.json', 'utf8')
    ctx.isType = 'JSON'
    ctx.body = content
})

app.listen(5000, () => {
    'app running 5000'
})