// node 可以模拟 http 两端，http 客户端发送请求，http 服务端响应请求。
// client 端处理业务的呈现，可视化程度。
// server 端处理请求的逻辑及资源，分析路径，给 client 响应。

const http = require('https')

http.get('https://www.baidu.com/', function(res) {
    var reqData;
    res.on('data', function(data) {
        console.log('req', reqData += data)
    })

    res.on('end', function() {
        console.log('ok')
    })
})