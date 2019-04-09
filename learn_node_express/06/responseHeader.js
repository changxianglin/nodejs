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

app.post('/process-contact', (req, res) => {
  console.log('Received contact from ' + req.body.name + '<' + req.body.email + '>')
  // save to database
  res.redirect(303, '/thank-yout')
})

app.post('/process-contact', (req, res) => {
  console.log('Received contact from ' + req.body.name + ' <' + req.body.email + '>')
  try {
    //  save to database

    return res.xhr ?
      res.render({ success: true }) :
      res.redirect(303, '/thank-you')
  } catch(ex) {
    return res.xhr ?
      res.json({ error: 'Database error'}) :
      res.redirect(303, '/database-error')
  }
})

var tours = [
  { id: 0, name: 'Hood River', price: 99.99 },
  { id: 1, name: 'Oregon Coast', price: 149.55 },
]

app.get('/api/tours', (req, res) => {
  res.json(tours)
})

app.get('/api/tours', (req, res) => {
  var toursXml = '<?xml version="1.0"?><tours>' +
    products.map((p) => {
      return '<tour price="' + p.price + 
        '" id="' + p.id + '">' + p.name + '</tour>'
    }).join('') + '</tours>'
  var toursText = tours.map((p) => {
      return p.id + ': ' + p.name + ' (' + p.price + ')'
    }).join('\n')
  res.format({
    'application/json': function() {
      res.json(tours)
    },
    'application/xml': function() {
      res.type('application/xml')
      res.send(toursXml)
    },
    'text/xml': function() {
      res.type('text/xml')
      res.send(toursXml)
    },
    'text/plain': function() {
      res.type('text/plian')
      res.send(toursXml)
    }
  })
})

app.put('/api/tour/:id', (req, res) => {
  var p = tours.some(function(p) { return p.id === req.params.id })
  if(p) {
    if( req.query.name ) p.name = req.query.name
    if( req.query.price ) p.price = req.query.price
    res.json({ success: true })
  } else {
    res.json({ error: 'No such tour exists.' })
  }
})

app.delete('/api/tour/:id', (req, res) => {
  var i
  for (var i = tours.length - 1; i >= 0; i--) {
    if(tours[i].id === req.params.id) break
    if(i >= 0) {
      tours.splice(i, 1)
      res.json({ success: true })
    } else {
      res.json({ error: 'No such tour exists.'})
    }
  }
})

app.listen(3000)

