const express = require("express")
const cors = require("cors")
const app = express()

app.get("/", function(req, res) {
    res.header("Access-Control-Allow-Origin", "*");
    res.send("home page")
})

app.get("/about", function(req, res) {
    res.header("Access-Control-Allow-Origin", "*");
    res.send("about")
})

app.get("/index", function(req, res) {
    res.header("Access-Control-Allow-Origin", "*");
    res.send("index")
})

app.get('/', function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "X-Requested-With");
    res.header("Access-Control-Allow-Methods","PUT,POST,GET,DELETE,OPTIONS");
    res.header("X-Powered-By",' 3.2.1')
    res.header("Content-Type", "application/json;charset=utf-8");
    console.log("cors ... 1")
    next();
});


app.listen(3000, function() {
    console.log("running in port 3000")
})
