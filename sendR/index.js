const axios = require('axios')
const cheerio = require('cheerio')


axios.get('http://www.weather.com.cn/weather/101280601.shtml')
    .then(function (response) {
      const $ = cheerio.load(response.data)
      var data = [];
      $('#7d li').each(function(){
          var $this = $(this);

          // 使用trim去掉数据两端的空格
        data.push({
              title : trim($this.find('.sky h1').text()),
              wea: trim($this.find('.sky .wea').text()),
              leg: trim($this.find('.sky .tem').text())
            });
      })

      function trim(str){
        return str.replace(/(^\s*)|(\s*$)/g, "");
      }

      console.log(data)
})
.catch(function (error) {
  console.log(error);
});
