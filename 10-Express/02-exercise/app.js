const express = require('express')
const app = express()

app.get('/', (req, res) => {
  res.send('Hi there, welcome to my assignment!')
})

app.get('/speak/:animals', (req, res) => {
  const sounds = {
    pig: "'Oink'",
    cow: "'Moo'",
    dog: "'Woof Woof!'",
  }
  const animal = req.params.animals
  const sound = sounds[animal]
    res.send(`The ${animal} says ${sound}`)
})

app.get('/repeat/:message/:times', (req, res) => {
  const message = req.params.message
  const times = Number(req.params.times)
  let result = ""
  for (let i = 0; i<times; i++){
    result+=(`${message} `)
  }
  res.send(result)
})

app.get('*', (req, res) => {
  res.send('Sorry, page not found...What are you doing with your life?')
})

// Tell Express to listen for requests (start server)
app.listen(3000)
console.log('Magic happens on port 3000');

