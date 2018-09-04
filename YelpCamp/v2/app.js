const express    = require('express'),
      app        = express(),
      bodyParser = require('body-parser'),
      mongoose   = require('mongoose')

mongoose.connect("mongodb://localhost/yelp_camp", { useNewUrlParser: true })
app.use(bodyParser.urlencoded({extended: true}))
app.set('view engine', 'ejs')

// DB SCHEMA SETUP
const campgroundSchema = new mongoose.Schema({
  name: String,
  image: String
})

const Campground = mongoose.model("Campground", campgroundSchema)

// Campground.create(
//   {
//     name: 'Granite Hill', 
//     image: 'https://cdn.pixabay.com/photo/2016/02/18/22/16/tent-1208201_1280.jpg'
//   }, (err, campground) => {
//     if(err) {
//       console.log(err)
//     } else {
//       console.log('Newly created campground:')
//       console.log(campground)
//     }
//   })

// const campgrounds = [
//   {name: 'Salmon Creek', image: 'https://cdn.pixabay.com/photo/2016/11/21/15/14/camping-1845906_1280.jpg'},
//   {name: 'Granite Hill', image: 'https://cdn.pixabay.com/photo/2016/02/18/22/16/tent-1208201_1280.jpg'},
//   {name: 'Mountain Goat\'s Rest', image: 'https://cdn.pixabay.com/photo/2015/03/26/10/29/camping-691424_1280.jpg'},
//   {name: 'Salmon Creek', image: 'https://cdn.pixabay.com/photo/2016/11/21/15/14/camping-1845906_1280.jpg'},
//   {name: 'Granite Hill', image: 'https://cdn.pixabay.com/photo/2016/02/18/22/16/tent-1208201_1280.jpg'},
//   {name: 'Mountain Goat\'s Rest', image: 'https://cdn.pixabay.com/photo/2015/03/26/10/29/camping-691424_1280.jpg'},
//   {name: 'Salmon Creek', image: 'https://cdn.pixabay.com/photo/2016/11/21/15/14/camping-1845906_1280.jpg'},
//   {name: 'Granite Hill', image: 'https://cdn.pixabay.com/photo/2016/02/18/22/16/tent-1208201_1280.jpg'},
//   {name: 'Mountain Goat\'s Rest', image: 'https://cdn.pixabay.com/photo/2015/03/26/10/29/camping-691424_1280.jpg'},
// ]

app.get('/', (req, res) => {
  res.render('landing')
})

app.get('/campgrounds', (req, res) => {
  // Get all campgrounds from DB
  Campground.find({}, (err, allCampgrounds) => {
    if(err){
      console.log(err)
    } else {
      res.render('campgrounds', {allCampgrounds})
    }
  })
})

app.post('/campgrounds', (req, res) => {
  const name = req.body.name
  const image = req.body.image
  const newCampground = {name: name, image: image}
  // Create a new campground and save to DB
  Campground.create(newCampground, (err, newlyCreated) => {
    if(err) {
      console.log(err)
    } else {
      //redirect back to campgrounds page
      res.redirect('/campgrounds')
    }
  })
})

app.get('/campgrounds/new', (req, res) => {
  res.render('new')
})

app.listen(3000, () => {
  console.log('YelpCamp server started!')
})