const mongoose = require('mongoose')
mongoose.connect("mongodb://localhost/cat_app", { useNewUrlParser: true })

const catSchema = new mongoose.Schema({
  name: String,
  age: Number,
  temperament: String
})

const Cat = mongoose.model("Cat", catSchema)

//adding a new cat to the DB
// const george = new Cat({
//   name: 'Mrs. Norris',
//   age: 7,
//   temperament: 'Evil'
// })

// george.save((err, cat) => {
//   if(err) {
//     console.log('Something went wrong!')
//   } else {
//     console.log('We just saved a cat to the DB:')
//     console.log(cat)
//   }
// })

// Add & Save
// Cat.create({
//   name: 'Snow White',
//   age: 15,
//   temperament: 'Bland'
// }, (err, cat) => {
//   if(err){
//     console.log(err)
//   } else {
//     console.log(cat)
//   }
// })

//retrieve all cats from the DB and console.log each one
Cat.find({}, (err, cats) => {
  if(err) {
    console.log('Oh No, Error!')
    console.log(err)
  } else {
    console.log('All The Cats...')
    console.log(cats)
  }
})