class Request {
    constructor() {

        this.raw = ''
        this.method = 'GET'
        this.path = ''

        this.query = {}
        this.body = ''
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


// should to  recite