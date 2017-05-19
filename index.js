// ajax xhr === http  ====> 服务器 =====> 服务
//  node.js
const http = require('http')
const PORT = 7000
const App = require('./app.js')
const server = new App()
http.createServer(server.initServer).listen(PORT, () => {
    console.log(`server listening on port ${PORT}`)
})