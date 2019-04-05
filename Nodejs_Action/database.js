const mongoose = require('mongoose')

const uri = 'mongodb://localhost/article'

mongoose.connect(uri, (err) => {
  if(err) {
    console.log('connect failed')
    console.log(err)
    return 
  }
  console.log('connect success')
})