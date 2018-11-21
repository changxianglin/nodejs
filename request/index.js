const axios = require('axios')
const cheerio = require('cheerio')
const mongoose = require('mongoose')


mongoose.connect('mongodb://timer:timer123@ds039737.mlab.com:39737/timer')

var FirstSchema = new mongoose.Schema({
    timer: Date
})

var newTimer = mongoose.model('newTimer', FirstSchema)


var getInfo = () => {
    axios.get('http://www.ruanyifeng.com/blog/').then((res) => {
        // console.log(res.data)
        // var html = res.data
        // var $ = cheerio.load(html);
        // var listItem = []
        // $('ul').each((index,item) => {
        //     console.log(item)
        //     const tempData = {
        //         text:$(item).find('.module-list-item').text().trim()
        //     }
        //     listItem.push()
        // })
        // console.log(listItem, '???')


        newTimer({
            timer: new Date()
        }).save((err) => {
            if(err) throw err
            console.log('save good')
        })

        var $ = cheerio.load(res.data);

        // 输出导航的html代码
        // console.log( $('#homepage').html() );
        // console.log( $('.asset-header .asset-name').text())
        // console.log( $('.asset-header .asset-name a').attr('href'))
        console.log($('#homepage .module-list-item').html())
    })
}

// getInfo()

var findInfo = () => {
    newTimer.find({}, function(err, data) {
        if(err) throw  err
        console.log(data)
    })
}

findInfo()