const express = require('express');
const axios = require('axios');
const cheerio = require('cheerio');

const app = express();

const cnodeUrl = 'https://cnodejs.org';

app.get('/',(req,res,next)=>{
    axios.get(cnodeUrl).then((response)=>{
        const html = response.data;
        // 加载 html 内容
        const $ = cheerio.load(html);
        let list = [];
        // 进行首页帖子遍历
        $("#topic_list .cell").each((index,item)=>{
            const tmpData = {
                avatar:$(item).find('.user_avatar img').attr('src'),
                replies:$(item).find('.reply_count .count_of_replies').text().trim(),
                visits:$(item).find('.reply_count .count_of_visits').text().trim(),
                link:cnodeUrl + $(item).find('.topic_title_wrapper .topic_title').attr('href'),
                text:$(item).find('.topic_title_wrapper .topic_title').attr('title')
            };
            list.push(tmpData);
        });
        // 输出列表
        res.send(list);
    }).catch((err)=>{
        console.log(err);
        res.send(err);
    })
});

app.listen(3000,()=>{
    console.log('[Server at] : http://127.0.0.1:3000');
});