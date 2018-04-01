const fs = require('fs')
const log = require('./utils')

const models = require('./models')
const User = models.User
const Message = models.Message


const messageList = []

const template = (name) => {
    const path = 'templates/' + name
    const options = {
        encoding: 'utf8'
    }
    const content = fs.readFileSync(path, options)
    return content
}

const index = () => {
    const header = 'HTTP/1.1 200 OK\r\nContent-Type: text/html\r\n'
    const body = template('index.html')
    const r = header + '\r\n' + body
    return r
}

const login = (request) => {
    let result
    log('debug request method', request.method)
    if(request.method !== 'POST') {
        const form = request.query
        const u = User.create(form)

        if(u.validateLogin()) {
            result = '登录成功'
        } else {
            result = '登录失败'
        }
    } else {
        result = ''
    }

    const header = 'HTTP/1.1 200 OK\r\nContent-Type: text/html\r\n'
    let body = template('login.html')
    body = body.replace('{{result}}', result)
    const r = header + '\r\n' + body
    return r
}

const register = (request) =>  {
    let result
    if(request.method === 'POST') {
        const form = request.form()
        const u = User.create(form)
        if(u.validateRegister()) {
            u.save()
            const us = User.all()
            result = `注册成功<br><pre>${us}</pre>`
        } else {
            result = '用户名或密码长度必须大于2位'
        }
    } else {
        result = ''
    }
}

const message = (request) => {
    if(request.method == 'POST') {
        console.log('看看数据收到没有')
        const form = request.form()
        console.log('看看有没有拿到 form ', form)
        const m = Message.create(form)
        log('debug post', form, m)
        m.save()
    }

    const header = 'HTTP/1.1 200 OK\r\nContent-Type: text/htlm\r\n'
    let body = template('mssage.html')
    const ms = Message.all()
    console.log('所有 message 消息', ms)
    body = body.replace('{{messages}}', ms)
    console.log('replace 之后的 body', body)
    const r = header + '\r\n' + body
    return r
}

const static = (request) => {
    const filename = request.query.file || 'dog.gif'
    const path = `static/${filename}`
    const body = fs.readFileSync(path)
    const header = 'HTTP/1.1 200 ok\r\nContent-Type: image/gif\r\n\r\n'
    const h = Buffer.from(header)
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

module.exports  = routeMapper