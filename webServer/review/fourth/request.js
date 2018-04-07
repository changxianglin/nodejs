const log = require('./utils')

class Request {
    constructor() {
        this.raw = ''
        this.method = 'GET'
        this.path = ''
        this.query = {}
        this.body = ''
        this.headers = {}
        this.cookies = {}
    }

    addCookies() {
        const cookies = this.headers.Cookie || ''
        const pairs = cookies.split(';')

        pairs.forEach((pair) => {
            if(pair.includes('=')) {
                const [k, v] = pair.split('=')
                this.cookies[k] = v
            }
        })
    }

    addHeaders(headers) {
        headers.forEach((header) => {
            const [k, v] = header.split(':')
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