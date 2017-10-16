const express = require("express")
const app = express()

app.get("/header", function(req, res) {
    res.set("Content-Type", "text/plain")
    var s = ""
    for(var name in req.headers) s += name + ":" + req.headers[name] + "\n"
    res.send(s)
})
app.get("/yeap", function(req, res) {
    res.send("zhangxianglin_work")
})
console.log("yeap")
app.listen(3000)
