const express = require('express')
const morgan = require('morgan')
const mongoose = require('mongoose')

const app = express()

app.use(morgan('short'))

app.get('/user/:id', (req, res) => {
  console.log('Fetching user with id: ' + req.params.id)
  const connection = mongoose.connect('mongodb://localhost/resetapi', {useNewUrlParser: true})
  res.end()
})

app.get('/', (req, res) => {
  console.log('Response to root route')
  res.send('Hello from ROOOT')
})


app.get('/users', (req, res) => {
  var user1 = { firstName: 'Stephen', lastName: 'Curry' }
  const user2 = { firstName: 'Kevin', lastName: 'Durant'}
  res.json([user1, user2])
})

app.listen(3000, () => {
  console.log('server in up and listening on 3000...')
})