const express = require('express')
const app = express()


app.get('/', (req, res) => {
  console.log('Response to root route')
  res.send('Hello from ROOOT')
})

app.listen(3000, () => {
  console.log('server in up and listening on 3000...')
})