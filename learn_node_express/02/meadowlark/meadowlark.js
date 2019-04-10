var express = require('express')
var exphbs = require('express-handlebars')
var bodyParser = require('body-parser')
var fromidable = require('formidable')
const cookieParser = require('cookie-parser')
const session = require('express-session')

var fortune = require('./lib/fortune')

var app = express()


app.engine('handlebars', exphbs({defaultLayout: 'main'}))
app.set('view engine', 'handlebars')
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: false }))
app.use(cookieParser())

app.set('port', process.env.PORT || 3000)

app.use(express.static(__dirname + '/public'))

app.get('/', (req, res) => {
  res.render('home')
})

app.get('/about', (req, res) => {
  res.render('about', { fortune: fortune.getFortune() })
})

app.get('/newsletter', (req, res) => {
  res.render('newsletter', { csrf: 'CSRF token goes here' })
})

app.post('/process', (req, res) => {
  console.log('Form (from querystring): ' + req.query.form)
  console.log('CSRF token (from hidden form field): ' + req.body._csrf)
  console.log('Name (from visible from field): ' + req.body.name)
  console.log('Email (from visible from field): ' + req.body.email)
  res.redirect(303, '/thank-you')
})

app.get('/cookie', (req, res) => {
  console.log('cookie: ', req.cookies)
  console.log('Singed Cookies: ' + req.signedCookies)
  res.cookie('singed_monster', 'nom nom', { isnged: true })
  res.end()
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