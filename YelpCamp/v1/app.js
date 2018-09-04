const express = require('express')
const app = express()
const bodyParser = require('body-parser')

app.use(bodyParser.urlencoded({extended: true}))
app.set('view engine', 'ejs')

const campgrounds = [
  {name: 'Salmon Creek', image: 'https://cdn.pixabay.com/photo/2016/11/21/15/14/camping-1845906_1280.jpg'},
  {name: 'Granite Hill', image: 'https://cdn.pixabay.com/photo/2016/02/18/22/16/tent-1208201_1280.jpg'},
  {name: 'Mountain Goat\'s Rest', image: 'https://cdn.pixabay.com/photo/2015/03/26/10/29/camping-691424_1280.jpg'},
  {name: 'Salmon Creek', image: 'https://cdn.pixabay.com/photo/2016/11/21/15/14/camping-1845906_1280.jpg'},
  {name: 'Granite Hill', image: 'https://cdn.pixabay.com/photo/2016/02/18/22/16/tent-1208201_1280.jpg'},
  {name: 'Mountain Goat\'s Rest', image: 'https://cdn.pixabay.com/photo/2015/03/26/10/29/camping-691424_1280.jpg'},
  {name: 'Salmon Creek', image: 'https://cdn.pixabay.com/photo/2016/11/21/15/14/camping-1845906_1280.jpg'},
  {name: 'Granite Hill', image: 'https://cdn.pixabay.com/photo/2016/02/18/22/16/tent-1208201_1280.jpg'},
  {name: 'Mountain Goat\'s Rest', image: 'https://cdn.pixabay.com/photo/2015/03/26/10/29/camping-691424_1280.jpg'},
]

app.get('/', (req, res) => {
  res.render('landing')
})

app.get('/campgrounds', (req, res) => {
  res.render('campgrounds', {campgrounds})
})

app.post('/campgrounds', (req, res) => {
  const name = req.body.name
  const image = req.body.image
  const newCampground = {name: name, image: image}
  campgrounds.push(newCampground)
  res.redirect('/campgrounds')
})

app.get('/campgrounds/new', (req, res) => {
  res.render('new')
})

app.listen(3000, () => {
  console.log('YelpCamp server started!')
})