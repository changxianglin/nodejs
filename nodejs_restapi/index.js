const express = require('express')
const morgan = require('morgan')
const app = express()

app.use(morgan('short'))

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