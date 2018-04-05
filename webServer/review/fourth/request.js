const log = require('./utils')

class Request {
    constructor() {
        this.raw = ''
        this.method = 'GET'
        this.path = ''
        this.query = {}
        this.body = ''
        this.header = {}
        this.cookies = {}
    }

    addCookies() {
        const cookies = this.headers.Cookie || ''
        const pairs = cookies.split(';')

        pairs.forEach((pairs) => {
            if(pair.includes('=')) {
                const [k, v] = pairs.split('=')
                this.cookies[k] = v
            }
        })
    }

    addHeaders(headers) {
        headers.forEach((headers) => {
            const [k, v] = headers.split(':')
            this.headers[k] = v
        })

        this.addCookies()
    }

    form() {
        const body = decodeURIComponent(this.body)
        const pairs = body.split('&')
        const d = {}
        for(let pair of pairs) {
            const [k, v] = pair.split('=')
            d[k] = v
        }
        return d
    }
}

module.exports = Request