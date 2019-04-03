const Express = require('express')
const BodyParser = require('body-parser')
const Mongoose = require('mongoose')
const Morgan = require('morgan')

const app = Express()

Mongoose.connect('mongodb://localhost/mongdev')

app.use(Morgan('short'))
app.use(BodyParser())
app.use(BodyParser.urlencoded({ extended: true }))

const PersonModel = Mongoose.model('person', {
  lastname: String,
  firstname: String
})

app.post('/person', async (req, res, next) => {
  try {
    var person = new PersonModel(req.body)
    var result = await person.save()
    res.send(result)
  } catch (err) {
    res.status(500).send(err)
  }
})

app.get('/people', async (req, res, next) => {
  try {
    var result = await PersonModel.find().exec()
    res.send(result)
  } catch (err) {
    res.status(500).send(err)
  }
})

app.get('/person/:id', async (req, res, next) => {
  try {
    var person = await PersonModel.findById(req.params.id).exec()
    res.send(person)
  } catch (err) {
    res.send(500).send(err)
  }
})

app.put('/person/:id', async (req, res) => {
  try {
    var person = await PersonModel.findById(req.params.id).exec()
    person.set(req.body)
    var result = await person.save()
    res.send(result)
  } catch (err) {
    res.status(500).send(err)
  }
})

app.delete('/person/:id', async (req, res, next) => {
  try {
    var result = await PersonModel.deleteOne({ _id: req.params.id}).exec()
    res.send(result)
  } catch (err) {
    res.status(500).send(err)
  }
})

const PORT = process.env.PORT || 5000

const run = () => {
  console.log('Server run in port ' + PORT)
}

app.listen(PORT, run)