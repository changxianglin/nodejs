const connect = require('connect')


const app = connect()
    .use(connect.bodyParser())
app.listen(3000)


