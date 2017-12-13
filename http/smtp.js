const nodemailer = require('nodemailer')
const log = console.log.bind(console)

const mailTransport = nodemailer.createTransport({
    host: 'smtp.163.com',
    secureConnection: true,
    auth: {
        user: 'zhangxianghuanlin@163.com',
        pass: '1234567m',
    }
})

const mailOption = {
    form: 'zhangxianghuanlin@163.com',
    to: '281532612@qq.com',
    subject: 'Hello',
    text: 'Hello world',
    html: '<b> Hello world </b>>'
}

mailTransport.sendMail(mailOption, (error, info) => {
    if (error) {
        return log(error)
    }
    log('Message send: ' + info.response)
})
