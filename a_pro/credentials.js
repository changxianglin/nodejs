module.exports = {
    cookieSecret: "把你的 cookie 密钥放在在里。",
}

在其他文件中引入需要做的是如下：
var credentials = require("./credentials.js")


app.use(require("cookie-parser")(credentials.cookieSecret))

res.cookie("monster", "nom nom")
res.cookie("signed_monster", "nom nom", {signed:true})


var monster = req.cookies.monster
var signedMonster = req.signedCookies.monster

app.use(require("cookie-parser")(credentials.cookieSecret))
app.use(require("express-session")())

req.session.userName = "Anonymous"
var colorSchme = req.session.colorSchme || "dark"

// 删除会话的的方法
req.session.userName = null
delete req.session.colorSchme


app.use(function(req, res, next) {
    //
    res.locals.flash = req.session.flash
    delete req.session.falsh
    next()
})

app.post("/newsletters", function(req, res, next) {
    var name = req.body.name || " ", email = req.body.email || " "
    // 输入验证
    if (!email.match(VALID_EMAIL_REGEX)) {
        if (req.xhr) {
            return res.json({ error:"Invalid name email address."})
        }
        req.session.flash =  {
                type: "danger",
                intor: "Validation error",
                message: "The email address you entered was not valid."
        }
        return res.redirect(303, "/newsletters/archive")
    }
    new NewsletterSignup({name:name, email:email}).save(function(err) {
        if(err) {
            if (req.xhr) {
                return res.json({error: "Database error."})
            }
            req.seesion.flash = {
                    type: "danger",
                    intro: "Database error!",
                    message: "There was a database error; please try again later."
            }
            return res.redirect(303, "/newsletters/archive")
        }
    })
})
