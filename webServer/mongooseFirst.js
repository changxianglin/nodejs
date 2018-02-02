// 引入连接器
const mongoose = require('mongoose')

//连接数据库
mongoose.connect('mongodb://localhost:/test')

// 创建数据模型
const Cat = mongoose.model('Cat', {name: String})

const kitty = new Cat({name: 'kedaya'})
kitty.save().then(() => console.log('success'))