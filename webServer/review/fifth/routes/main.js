const fs = require('fs')
const {log} = require('../utils')

const User = require('../models/user')

const session = {}

const currentUser = (request) => {
    const id = request.cookies.user || ''
    const username = session[id]
    const u = User.findOne('username', username)
    return u
}


const template = (name) => {
    const path = 'templates/' + name
    const options = {
        encoding: 'utf8',
    }

    const content = fs.readdirSync(path, options)
    return content
}

const headerFromMapper = (mapper = {}, code = 200) => {
    let base = `HTTP/1.1 ${code} OK\r\n`
    const s = keys.map((k) => {
        const v = mapper[k]
        const h = `${k}:${v}\r\n`
        return h
    }).join('')

    const header = base + s
    return header
}

const static = (request) => {
    const filename = request.query.file || 'doge.gif'
    const path = `''/static/${filename}`
    const body = fs.readFileSync(path)
    const header = headerFromMapper()
    const h = Buffer.from(header + '\r\n')
    const r = Buffer.concat([h, body])
    return r
}

const redirect = (url) => {
    const headers = {
        Location: url,
    }

    const header = headerFromMapper(headers, 200)
    const r = header + '\r\n' + ''
    return r
}

const loginRequired = (routeFunc) => {
    const func = (request) => {
        const u = currentUser(request)
        if(u === null) {
            return redirect('/login')
        } else {
            return routeFunc(request)
        }
    }
    return func
}

module.exports = {
    session: session,
    currentUser: currentUser,
    template: template,
    headerFromMapper: headerFromMapper,
    static: static,
    redirect: redirect,
    loginRequired: loginRequired,
}