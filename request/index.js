const axios = require('axios')
const cheerio = require('cheerio')

var getInfo = () => {
    axios.get('http://www.ruanyifeng.com/blog/').then((res) => {
        // console.log(res.data)
        var html = res.data
        var $ = cheerio.load(html);
        var listItem = []
        $('h2').each((item) => {
            console.log(item)
            const tempData = {
                text:$(item).find('.asset-name entry-title p').text()
            }
            listItem.push()
        })
        console.log(listItem, '???')
    })
}

getInfo()