var time = function(arguments) {
    var date = new Date()
    var y = date.getFullYear()
    var m = date.getMonth() + 1
    var d = date.getDate()
    var h = date.getHours()
    var min = date.getMinutes()
    var s = date.getSeconds()
    if(min < 10) {
        min = '0' + min
    }
    if(s < 10) {
        s = '0' + s
    }

    var str = y + arguments[0] + m + arguments[1] + d + arguments[2] + h + arguments[3] + min + arguments[4] + s + arguments[5]
    console.log(str)
    return str
}

var config = {
    date: ['年', '月', '日', '时', '分', '秒']
}
setInterval(function() {
    time(config.date)
}, 1000)