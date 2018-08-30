const express = require('express')
const app = express()

app.set('view engine', 'ejs')
app.use(express.static('public'))

app.get('/', (req, res) => {
  res.render('home')
})

app.get('/fallinlovewith/:thing', (req, res) => {
  const thing = req.params.thing
  res.render('love', {thing})
})

app.get('/posts', (req, res) => {
  const posts = [
    {title: 'post1', author: 'Susy'},
    {title: 'Adorable pet bunny', author: 'Charlie'},
    {title: 'Can you believe this pomsky?', author: 'Colt'}
  ]
  res.render('post', {posts})
})

app.listen(3000)
console.log('Magic happens on port 3000');

