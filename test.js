// var http = require("http")
// http.createServer(function(req, res) {
//     res.writeHead(200, {"Content-type": "text/plain"})
//     res.end("this is a page......\n")
// }).listen(3000)
// console.log("end")

// var http = require("http")
// http.createServer(function(request, response) {
//
//   response.writeHead(200, {'Content-type': 'text/plain'})
//   response.end("已经访问到页面了的。。。\n")
// }).listen(9000)
// console.log("server running at http://127.0.0.1:9000")

var html = "<div style = 'color: red;'><h1>this is GET home page</h1></div>"
var posthtml = "<div style = 'color: red;'><h1>this is POST home page</h1></div>"
var errHTML = "<div style = 'color: red;'><h1>404</h1><ul><li>你的请求发到了太空</li></ul></div>"
var express = require("express")
var app = express()
app.get('/', function(req, res) {
  console.log("GET")
  res.send(html)
})

app.post("/", function(req, res) {
    console.log("POST")
    res.send(postHTML)
})

app.get("/list_user", function(req, res) {
      console.log("LIST")
      res.send("list user for get")
})

app.get("/del_user", function(req, res) {
    console.log("DEL")
    res.send("del list user for get")
})

app.get("/ab*cd", function(req, res) {
    console.log("...")
    res.send("正则")
})

app.get("*", function(req, res) {
  console.log("404")
  res.send(errHTML)
})

var server = app.listen(3000, function() {
    var host = server.address().address
    var port = server.address().port

    console.log("first page , can to go websit http://%s:%s", host, port)
})
