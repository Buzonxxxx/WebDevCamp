const express = require('express')
const app = express()
const request = require('request')

app.set('view engine', 'ejs')

app.get('/', (req, res) => {
  res.render('search')
})

app.get('/results', (req, res) => {
  const query = req.query.search
  request(`http://www.omdbapi.com/?apikey=thewdb&s=${query}`, function(error, response, body){
    if(!error && response.statusCode == 200){
      const results = JSON.parse(body)
      res.render('results', {results})
    }
  })
})

app.listen(3000, () => {
  console.log('Movie app has started!!!')
})