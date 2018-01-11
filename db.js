// 引入 mongoose
// 链接 mongodb
var mongoose = require('mongoose')

mongoose.connect('mongodb://127.0.0.1:12017/mydb')

// 是否连接成功
mongoose.connection.on('connected', function() {
    console.log('链接 ok')
})
// 链接出错
mongoose.connection.on('error', function(err) {
    console.log('链接出错' + err)
})
// 断开连接
mongoose.connection.on('disconnected', function() {
    console.log('断开 ')
})

module.exports = mongoose
