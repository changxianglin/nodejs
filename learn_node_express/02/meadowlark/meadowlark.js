var express = require('express')
var exphbs = require('express-handlebars')

var app = express()

app.engine('handlebars', exphbs({defaultLayout: 'main'}))
app.set('view engine', 'handlebars')


app.set('port', process.env.PORT || 3000)

app.use(express.static(__dirname + '/public'))

app.get('/', (req, res) => {
  res.render('home')
})

app.get('/about', (req, res) => {
  res.render('about')
})

app.use((req, res, next) => {
  res.status(404)
  res.render('404')
})

app.use((err, req, res, next) => {
  console.error(err.stack)
  res.status(500)
  res.render('500')
})

app.listen(app.get('port'), () => {
  console.log('Express started on http://localhost:' + app.get('port') + '; Press Ctrl-C to terminate.')
})