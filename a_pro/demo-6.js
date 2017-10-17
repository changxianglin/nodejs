const express = require("express")
const app = express()


app.get("/about", function(req, res) {
    res.render("about")
})

app.get("/error", function() {
    res.status(500)
    res.render("error")
})

app.listen(3000, function() {
    console.log("yeap to running.")
})
