const bodyParser = require('body-parser'),
methodOverride   = require('method-override')
mongoose         = require('mongoose'),
express          = require('express'),
app              = express(),

//APP CONFIG      
mongoose.connect("mongodb://localhost/restful_blog_app", { useNewUrlParser: true })
app.set('view engine', 'ejs')
app.use(express.static('public'))
app.use(bodyParser.urlencoded({extended: true}))
app.use(methodOverride('_method'))

// MONGOOSE/MODEL CONFIG
const blogSchema = new mongoose.Schema({
  title: String,
  image: String,
  body: String,
  created: {type: Date, default: Date.now}
})
const Blog = mongoose.model("Blog", blogSchema)

//RESTFUL ROUTES
app.get('/', (req, res) => {
  res.redirect('/blogs')
})

app.get('/blogs', (req, res) => {
  Blog.find({}, (err, blogs) => {
    if(err){
      console.log(err)
    } else {
      res.render('index', {blogs})
    }
  })
})

app.post('/blogs', (req, res) => {
  Blog.create(req.body.blog, (err, newBlog) => {
    if(err) {
      res.render('new')
    } else {
      res.redirect('/blogs')
    }
  })
})

app.get('/blogs/new', (req, res) => {
  res.render('new')
})

app.get('/blogs/:id', (req, res) => {
  Blog.findById(req.params.id, (err, foundBlog) => {
    if(err) {
      res.redirect('/blogs')
    } else {
      res.render('show', {foundBlog})
    }
  })
})

app.get('/blogs/:id/edit', (req, res) => {
  Blog.findById(req.params.id, (err, foundBlog) => {
    if(err) {
      res.redirect('/blogs')
    } else {
      res.render('edit', {foundBlog})
    }
  })
})

// UPDATE ROUTE
app.put('/blogs/:id', (req, res) => {
  Blog.findByIdAndUpdate(req.params.id, req.body.blog, (err, updatedBlog) => {
    if(err) {
      res.redirect('/blogs')
    } else {
      res.redirect(`/blogs/${req.params.id}`)
    }
  })
})

//DELETE ROUTE
app.delete('/blogs/:id', (req, res) => {
  Blog.findByIdAndRemove(req.params.id, (err) => {
    if(err) {
      res.redirect('/blogs')
    } else {
      res.redirect('/blogs')
    }
  })
})

app.listen(3000, () => {
  console.log('RESTfulBlogApp server started!')
})