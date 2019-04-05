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

const ArticelSchema = new mongoose.Schema({
  title: String,
  author: String,
  content: String,
  publishTime: Date,
})

mongoose.model('Article', ArticelSchema)

const Article = mongoose.model('Article')

var art = new Article({
  title: 'node.js',
  author: 'node',
  content: 'node.js is great!',
  publishTime: new Date(),
})

// 增
// art.save((err) => {
//   if(err) {
//     console.log('save filed')
//     console.log(err)
//   } else {
//     console.log('save successed')
//   }
// })

// 查
// Article.find({title: 'node.js'}, (err, docs) => {
//   if(err) {
//     console.log('error')
//     return
//   }
//   console.log('result: ' + docs)
// })

// 改
// Article.find({title: 'node.js'}, (err, docs) => {
//   if(err) {
//     console.log('error')
//     return
//   }
  
//   docs[0].title = 'javascript'
//   docs[0].save()

//   console.log('result: ' + docs)
// })

// 删
Article.find({}, (err, docs) => {
  if(err) {
    console.log('error')
    return
  }
  if(docs) {
    docs.forEach((ele) => {
      ele.remove()
    })
  }
})