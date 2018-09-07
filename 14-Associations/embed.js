const mongooes = require('mongoose')
mongooes.connect('mongodb://localhost/blog_demo', { useNewUrlParser: true })

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

// const newUser = new User({
//   email: 'hermione@hogwarts.edu',
//   name: 'Hermione Granger'
// })

// newUser.posts.push({
//   title: 'How to bre polyjuice potion',
//   content: 'Just kidding. Go to potions class to learn it!'
// })

// newUser.save((err, user) => {
//   if(err) {
//     console.log(err)
//   } else {
//     console.log(user)
//   }
// })

// const newPost = new Post({
//   title: 'Reflections on Apples',
//   content: 'They are delicious'
// })

// newPost.save((err, post) => {
//   if(err) {
//     console.log(err)
//   } else {
//     console.log(post)
//   }
// })

User.findOne({name: 'Hermione Granger'}, (err, user) => {
    if(err) {
    // console.log(err)
  } else {
    user.posts.push({
      title: '3 Things I really hate',
      content: 'Voldemort. Voldemort. Voldemort.'
    })
    user.save((err, user) => {
        if(err) {
          console.log(err)
        } else {
          console.log(user)
        }
      })
  }
})