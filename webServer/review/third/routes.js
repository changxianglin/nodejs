const fs = require('fs')
const log = require('./utils')

const models = require('./models')
const User = models.User
const Message = models.Message


const messageList = []

const template = (name) => {
    cosnt path = 'templates/' + name
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
        
    }
}