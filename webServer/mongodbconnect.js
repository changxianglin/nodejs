// 引入依赖
const mongoose = require('mongoose')

// 连接数据库
mongoose.connect('mongodb://localhost/test')

const db = mongoose.connection
// 监视异常
db.on('error', console.error.bind(console, '连接错误'))
db.once('open', function() {
    console.log('Once open')
})

//创建数据类型
const kittySchema = mongoose.Schema({
    name: String
})

// var Kitten  = mongoose.model('Kitten', kittySchema)
//
// var silence = new Kitten({
//     name: 'Silence'
// })
// console.log(silence.name)

kittySchema.methods.speak = function() {
    var greeting = this.name
    ? 'Meow name is ' + this.name
        : 'I do not have a name '
    console.log(greeting)
}

var Kitten = mongoose.model('Kitten', kittySchema)

var fluffy = new Kitten({name: 'fluffy'})
fluffy.speak()

fluffy.save(function(err, fluffy) {
    if(err) return console.log(err)
    fluffy.speak()
})

Kitten.find(function(err, kittens) {
    if(err) return console.error(err)
    console.log(kittens)
})

Kitten.find({name: /^fluff/}, function(err, data) {
    if(err) throw err
    console.log(data)
})




