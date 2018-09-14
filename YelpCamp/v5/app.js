const express    = require('express'),
      app        = express(),
      bodyParser = require('body-parser'),
      mongoose   = require('mongoose'),
      Campground = require('./models/campground')
      seedDB     = require('./seeds')
      Comment    = require('./models/comment')
      
mongoose.connect("mongodb://localhost/yelp_camp_v5", { useNewUrlParser: true })
app.use(bodyParser.urlencoded({extended: true}))
app.set('view engine', 'ejs')
app.use(express.static(__dirname + '/public'))
      
seedDB()      

app.get('/', (req, res) => {
  res.render('landing')
})

//INDEX - show all campgrounds
app.get('/campgrounds', (req, res) => {
  // Get all campgrounds from DB
  Campground.find({}, (err, allCampgrounds) => {
    if(err){
      console.log(err)
    } else {
      res.render('campgrounds/index', {allCampgrounds})
    }
  })
})

//CREATE - add new campgrounds to DB
app.post('/campgrounds', (req, res) => {
  const name = req.body.name
  const image = req.body.image
  const description = req.body.description
  const newCampground = {name: name, image: image, description: description}
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

//NEW - show from to create new campground
app.get('/campgrounds/new', (req, res) => {
  res.render('campgrounds/new')
})

//SHOW - show more info about one campground
app.get('/campgrounds/:id', (req, res) => {
  Campground.findById(req.params.id).populate('comments').exec((err, foundCampground) => {
    if(err) {
      console.log(err)
    } else {
      // render show template with that campground
      res.render('campgrounds/show', {foundCampground})
    }
  })
})

// ========================================================================
// COMMENTS ROUTES
// ========================================================================

app.get('/campgrounds/:id/comments/new', (req, res) => {
  Campground.findById(req.params.id, (err, campground) => {
    if(err) {
      console.log(err)
    } else {
      res.render('comments/new', {campground})
    }
  })
})

app.post('/campgrounds/:id/comments', (req, res) => {
  // lookup campground using ID
  Campground.findById(req.params.id, (err, campground) => {
    if(err) {
      console.log(err)
      res.redirect('/campgrounds')
    } else {
      Comment.create(req.body.comment, (err, comment) => {
        if(err) {
          console.log(err)
        } else {
          campground.comments.push(comment)
          campground.save()
          res.redirect(`/campgrounds/${campground._id}`)
        }
      })
    }
  })
})

app.listen(3000, () => {
  console.log('YelpCamp server started!')
})