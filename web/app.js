const Koa = require('koa')
const fs = require('fs')
const Router = require('koa-router')
const bodyParser = require('koa-bodyparser')

const app = new Koa()
const router = new Router()


const index = ctx => {
    let content = fs.readFileSync('fe.html', 'utf8').toString()
    ctx.response.type = 'text/html'
    ctx.response.body = content
}

const main = ctx => {
    console.log(ctx.request.query)
    let content = ctx.request.query
    fs.appendFileSync('message.txt', content);
    ctx.response.type = 'json'
    ctx.response.body = content
}

const postData = ctx => {
    console.log('post')
    console.log(ctx.request.body)
    let content = ctx.request.body
    fs.appendFileSync('message.txt', content);
    ctx.response.type = 'json'
    ctx.response.body = content
}

app.use(bodyParser())
app.use(router.routes())

router.get('/', index)
router.get('/login', main)
router.post('/data', postData)

app.listen(3000);

