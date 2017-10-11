var express = require('express');
var app = express();

var handlebars = require('express3-handlebars')
.create({ defaultLayout:'main' });
app.engine('handlebars', handlebars.engine);
app.set('view engine', 'handlebars');

app.get('/', function(req, res) {
res.render('home');
});
app.get('/about', function(req, res) {
res.render('about');
});
// 404 catch-all 处理器（中间件）
app.use(function(req, res, next){
res.status(404);
res.render('404');
});
// 500 错误处理器（中间件）
app.use(function(err, req, res, next){
console.error(err.stack);
res.status(500);
res.render('500');
});

var server = app.listen(3000, function () {
  var host = server.address().address;
  var port = server.address().port;

  console.log('Example app listening at http://%s:%s', host, port);
});
