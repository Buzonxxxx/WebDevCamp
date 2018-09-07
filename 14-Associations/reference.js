const mongooes = require('mongoose')
mongooes.connect('mongodb://localhost/blog_demo_2', { useNewUrlParser: true })

// POST - title, content
const postSchema = new mongooes.Schema({
  title: String,
  content: String
})
const Post = mongooes.model('Post', postSchema)

// USER - email, name
const userSchema = new mongooes.Schema({
  email: String,
  name: String,
  posts: [postSchema]
})
const User = mongooes.model('User', userSchema)
