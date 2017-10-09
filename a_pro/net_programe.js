var net = require("net")
var server = net.createServer(function(socket) {
    socket.on("data", function(data) {
        socket.write("你好, 123")
    })
    socket.on("end", function() {
        console.log("断开连接, 345")
    })
    socket.write("欢迎光临《这是第一个node》实例：123456.\n")
})
server.listen(8124, function() {
    console.log("server bound")
})
