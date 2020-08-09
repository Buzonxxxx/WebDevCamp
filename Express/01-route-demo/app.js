const express = require('express')
const app = express()

app.get('/', (req, res) => {
  res.send('Hi there!')
})

app.get('/bye', (req, res) => {
  res.send('Goodbye!')
})

app.get('/cat', (req, res) => {
  console.log('SOMEONE MADE A REQUEST ON /cat')
  res.send('MEOW!')
})

app.get('/r/:subredditName', (req, res) => {
  // console.log(req.params)
  const subreddit = req.params.subredditName
  res.send(`Welcome to a subreddit of ${subreddit.toUpperCase()}!`)
})

app.get('/r/:subredditName/comments/:id/:title', (req, res) => {
  // console.log(req.params)
  const subreddit = req.params.subredditName
  const id = req.params.id
  const title = req.params.title
  res.send(`Welcome to a subreddit of ${subreddit.toUpperCase()}!, id is ${id} and title is ${title}`)
})

app.get('*', (req, res) => {
  res.send('YOU ARE A STAR!!!')
})

// Tell Express to listen for requests (start server)
app.listen(3000)
console.log('Magic happens on port 3000');

