var mongoose = require('mongoose')
mongoose.connect('mongoose://localhost/test')

var Book = mongoose.model('Book', (name: String))

var practicalNodeBook = new Book({name: 'practical Node.js'})

practicalNodeBook.save(function(err, resultes) {
  if(err) {
    console.log(err)
    process.exit(1)
  } else {
    console.log('Saved: ', resultes)
    process.exit(0)
  }
})
