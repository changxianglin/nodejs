const express = require("express")
const app = express()

app.get("/", function(req, res) {
    res.send("client02..")
})

app.get("/about", function(req, res) {
    res.send("client02...about...")
})

app.get("/index", function(req, res) {
    res.send("client02...index...")
})

app.get("/end", function(req, res) {
    res.send("client02...end...")
})

app.get('*', function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "X-Requested-With");
    res.header("Access-Control-Allow-Methods","PUT,POST,GET,DELETE,OPTIONS");
    res.header("X-Powered-By",' 3.2.1')
    res.header("Content-Type", "application/json;charset=utf-8");
    console.log("cors ...2")
    next();
});

app.listen("8081", function() {
    console.log("running in port 6000")
})
