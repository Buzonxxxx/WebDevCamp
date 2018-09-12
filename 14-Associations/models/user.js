const mongooes = require('mongoose')

// USER - email, name
const userSchema = new mongooes.Schema({
  email: String,
  name: String,
  posts: [
    {
      type: mongooes.Schema.Types.ObjectId,
      ref: 'Post'
    }
  ]
})
module.exports =  mongooes.model('User', userSchema)