const express = require('express')

const app = express()

app.engine('html', () => {})
app.set('view engine', 'html')
app.use(express.static(__dirname + '/public'))

app.get('/', (req, res) => {
  res.render('test')
})

app.listen(3000, () => console.log('Srever started http://localhost:3000/'))