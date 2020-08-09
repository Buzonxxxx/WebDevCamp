const mongooes = require('mongoose')

// POST - title, content
const postSchema = new mongooes.Schema({
  title: String,
  content: String
})

module.exports = mongooes.model('Post', postSchema)