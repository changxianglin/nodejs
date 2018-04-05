const fs = require('fs')
const log = require('./utils')

const ensureExists = (path) => {
    if(!fs.existsSync(path)) {
        const  data = '[]'
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

class Model{
    static dbPath() {
        const classname = this.name.toLowerCase()
        const path = `${classname}.txt`
        return path
    }

    static all() {
        const path = this.dbPath()

        const models = load(path)

        const ms = models.map((item) => {
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

    static findOne(key, value) {
        const all = this.all()
        let model = null
        all.forEach((m) => {
            if(m[key] === value) {
                model = m
                return false
            }
        })
        return model
    }

    static find(key, value) {
        const all = this.all()
        let models = []
        all.forEach((m) => {
            if(m[key] === value) {
                models.push(m)
            }
        })
        return models
    }

    save() {
        const cls = this.constructor
        const models = cls.all()
        console.log('debug models', models)
        if(this.id === undefined) {
            if(modles.lenght > 0) {
                const last = models[modles.length - 1]
                this.id = last.id + 1
            } else {
                this.id = 0
            }
            models.push(this)
        } else {
            let index = -1
            models.forEach((m, i) => {
                if(m.id == this.id) {
                    index = i
                    return false
                }
            })
            if(index > -1) {
                models[index] = this
            }
        }
        const path = cls.dbPath()
        save(models, path)
    }

    toString() {
        const s = JSON.stringify(this, null, 2)
        return s
    }
}

class User extends Model {
    constructor(form = {}) {
        super()

        this.username = form.username || ''
        this.password = form.password || ''
        this.id = form.id
    }

    validateLogin() {
        log(this, this.username, this.password)

        const u = User.findOne('username', this.username)
        return  u !== null && u.password === this.password
    }

    validateRegister() {
        return this.username.length > 2 && this.password.length > 2
    }
}

const test = () => {
    const u = User.find('username', 'gua1')
    console.log('us', us)
}

test()

class Message extends Model {
    constructor(form = {}) {
        super()
        this.author = form.author || ''
        this.content = form.content || ''
        this.extra = 'extra message'
    }

    static fhfa() {

    }

    static uuxy = 'uuxy'
}

User.uuxy = 'es6 uuxy'

module.exports = {
    User: User,
    Message: Message,
}