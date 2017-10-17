const express = require("express")
const app = express()

app.get("/test", function(req, res) {
    res.type("text/plain")
    res.send("this is a test...")
})

app.listen(3000, function(req, res) {
    console.log("running express ...")
})
