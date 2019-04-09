const express = require('express')

const app = express()

app.get('/about', (req, res) => {
  res.render('about')
})

app.get('/error', (req, res) => {
  res.status(500)
  res.render('error')
})

app.get('/greeting', (req, res) => {
  res.render('about', {
    message: 'welcome',
    style: req.query.style,
    userid: req.cookies.userid,
    username: req.session.username
  })
})

app.get('/no-layout', (req, res) => {
  res.render('no-layout', {layout: null})
})

app.get('/custom-layout', (req, res) => {
  res.render('custom-layout', { layout: 'custom' })
})

app.get('/test', (req, res) => {
  res.type('text/plain')
  res.send('this is a test')
})

app.use((err, req, res, next) => {
  console.error(err.stack)
  res.status(500)
  res.render('error')
})

app.use((req, res) => {
  res.status(404)
  res.render('not-found')
})

app.listen(3000)

