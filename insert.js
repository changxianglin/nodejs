// 添加数据
const order = require('./order')

function insert() {
//    使用　molel
    var order1 = new order({
        number: '1234',
        price: 100,
        buyTime: new Date()
    })
    order1.save(function(err, res) {
        if(err) {
            console.log('err')
        } else {
            console.log('sucess' + res)
        }
    })
}

// 调用
insert()