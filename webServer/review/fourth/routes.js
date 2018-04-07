const fs = require('fs')
const log = require('./utils')


const models = require('./models')
const User = models.User
const Message = models.Message

const session = {}

const randomStr = () => {
    const seed = 'sdfdsfkdsjfllksajf12434234197987438921lkjdsljfsdaljfsdaljjsdkf2e'
    let s = ''

    for(let i = 0; i < 16; i++) {
        const random = Math.random() * (seed.length - 2)
        const index = Math.floor(random)
        s += seed[index]
    }
    return s
}

const currentUser = (request) => {
    const id = request.cookies.user || ''
    log('debug session', session, id, request.cookies)
    const username = session[id] || '游客'
    return username
}

const template = (name) => {
    const path = 'templates/' + name

    const options = {
        encoding: 'utf8',
    }

    const content  = fs.readFileSync(path, options)
    return content
}


const headerFromMapper = (mapper = {}) => {
    let base = 'HTTP/1.1 200 OK\r\n'

    const keys = Object.keys(mapper)
    const s = keys.map((k) => {
        const v = mapper[k]
        const h = `${k}: ${v}\r\n`
        return h
    }).join('')

    const header = base + s
    return header
}

const index = (request) => {
    const headers = {
        'Content-Type': 'text/html',
    }

    const header = headerFromMapper(headers)
    let body = template('index.html')
    const username = currentUser(request)
    body = body.replace('{{username}}', username)
    const r = header + '\r\n' + body
    return r
}

const login = (request) => {
    const headers = {
        'Content-Type': 'text/html',
    }
    let result
    log('debug request method', request.method)
    if(request.method === 'POST') {
        const form = request.form()
        const u = User.create(form)
        console.log('debug u', u)

        if(u.validateLogin()) {
            const sid = randomStr()

            session[sid] = u.username
            headers['Set-Cookie'] = `user=${sid}`
            result = '登录成功'
        } else {
            result = '用户名或者密码错误'
        }
    } else {
        result = '用户名或者密码错误'
    }

    const username = currentUser(request)
    let body = template('login.html')

    body = body.replace('{{result}}', result)
    body = body.replace('{{username}}', username)
    const header = headerFromMapper(headers)
    const r = header + '\r\n' + body
    return r
}

const register = (request) => {
    let result
    if(request.method === 'POST') {
        const form = request.form()
        const u = User.create(form)
        if(u.validateRegister()) {
            u.save()
            const us = User.all()
            result = `注册成功<br><pre>${us}</pre>`
        } else {
            result = '用户名或者密码长度必须大于2'
        }
    } else {
       result = ''
    }
    let body = template('register.html')
    body = body.replace('{{result}}', result)
    const headers = {
        'Content-Type': 'text/html',
    }

    const header = headerFromMapper(headers)
    const r = header + '\r\n' + body
    return r
}

const message = (request) => {
    if(request.method === 'POST') {
        console.log('看看数据有没有收到')
        const form = request.form()
        console.log('看看有没有拿到 form ', form)
        const m = Message.create(form)
        log('debug post', form, m)
        m.save()
    }
    let body = template('message.html')
    const ms = Message.all()
    console.log('所有 message 消息', ms)
    body = body.replace('{{messages}}', ms)
    console.log('replace 之后的 body', body)
    const headers = {
        'Content-Type': 'text/html',
    }
    const header = headerFormMapper(headers)
    const r = header + '\r\n' + body
    return r
}

const static = (request) => {
    const filename = request.query.file || 'doge.gif'
    const path = `static/${filename}`
    const body = fs.readFileSync(path)
    const header = headerFromMapper()

    const h = Buffer.from(header + '\r\n')
    const r = Buffer.concat([h, body])
    return r
}

const routeMapper = {
    '/': index,
    '/static': static,
    '/login': login,
    '/register': register,
    '/message': message,
}

module.exports = routeMapper