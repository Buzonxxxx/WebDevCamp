const express = require('express')
const app = express()
const bodyParser = require('body-parser')

app.use(bodyParser.urlencoded({extended: true}))
app.set('view engine', 'ejs')

const campgrounds = [
  {name: 'Salmon Creek', image: 'https://pixabay.com/get/e83db50a21f4073ed1584d05fb1d4e97e07ee3d21cac104496f5c97ba6edb7bd_340.jpg'},
  {name: 'Granite Hill', image: 'https://pixabay.com/get/e837b1072af4003ed1584d05fb1d4e97e07ee3d21cac104496f5c97ba6edb7bd_340.jpg'},
  {name: 'Mountain Goat\'s Rest', image: 'https://pixabay.com/get/ef3cb00b2af01c22d2524518b7444795ea76e5d004b0144290f8c378a7efb0_340.jpg'},
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