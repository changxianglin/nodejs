// 对数据进行操作， 访问mongodb
// 1. 导入 db.js 文件

const mongoose = require('./db.js')

// mongoose 两个概念
// schema: 一种数据模型
// model：文档　document
//

// 2.创建对象
const schema = mongoose.Schema

// 3. 根据　schema 对象, 定义数据结构
const orderschema = new schema({
    number: {type: tring},
    price: {type: Number},
    buyTime: {type: Date}
})

// 导出对象 注意导出时的　ｓ　问题
module.exports = mongoose.model('order', orderschema)

