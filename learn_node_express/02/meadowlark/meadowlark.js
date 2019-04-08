var express = require('express')
var exphbs = require('express-handlebars')

var app = express()

app.engine('handlebars', exphbs({defaultLayout: 'main'}))
app.set('view engine', 'handlebars')


app.set('port', process.env.PORT || 3000)

app.use(express.static(__dirname + '/public'))

var fortunes = [
  'Conquer your fears or they will conquer you.',
  'Rivers need springs.',
  'Do not fear waht you don\'t know',
  'You will have a pleasan surprise.', 
  'Whenever possible, keep it simple'
]

app.get('/', (req, res) => {
  res.render('home')
})

app.get('/about', (req, res) => {
  var randomFortune = fortunes[Math.floor(Math.random() * fortunes.length)]
  res.render('about', { fortune: randomFortune })
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