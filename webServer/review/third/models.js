const fs = require('fs')
const log = require('./utils.js')

const ensureExists = (path) => {
    if(!fs.existSync(path)) {
        const data = []
        fs.writeFileSync(path, data)
    }
}

const save = (data, path) => {
    const s = JSON.stringify(data, null, 2)
    fs.writeFileSync(path, s)
}

const load = (path) => {
    const options = {
        encoding: 'utf8',
    }

    ensureExists(path)

    const s = fs.readFileSync(path, options)
    const data = JSON.parse(s)
    return data
}

class Model {
    static dbPath() {
        const className = this.name.toLowerCase()
        const path = `${className}.txt`
        return path
    }

    static all() {
        const path = this.dbPath()

        const models = load(path)

        const ms = models.map((item) =>  {
            const cls = this
            const instance = cls.create(item)
            return instance
        })
        return ms
    }

    static create(form = {}) {
        const cls = this
        const instance = new cls(form)
        return instance
    }

    save() {
        const cls = this.constructor

        const models = cls.all()

        models.push(this)

        const path = cls.dbPath()

        save(models, path)
    }

    toString() {
        const classname = this.constructor.name
        console.log('debug classname', classname)

        const keys = Object.keys(this)

        const properties = keys.map((k) => {
            const v = this[k]
            const s = `${k}: (${v})`
            return s
        }).join('\n')

        const s = `<${classname}: \n ${properties}\n\n`
        return  s
    }
}


class User extends Model {
    constructor(form = {}) {
        super()

        this.username = form.username || ''
        this.password = form.password || ''
    }

    validateLogin() {
        log(this, this.username, this.password)
        return this.username === 'gua' && this.password === '123'
    }

    validateRegister() {
        return this.username.length > 2 && this.password.length > 2
    }
}

class Message extends Model {
    constructor(form = {}) {
        super()
        this.author = form.author || ''
        this.contet = form.content || ''
        this.extra = 'extra message'
    }
}

module.exports = {
    User: User,
    Message: Message,
}
