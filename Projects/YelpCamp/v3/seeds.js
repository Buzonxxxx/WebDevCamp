const mongoose = require('mongoose')
const Campground  = require('./models/campground')
const Comment = require('./models/comment')

const data = [
  {
    name: 'West Rim Trail, Grand Canyon Village, United States', 
    image: 'https://images.unsplash.com/photo-1501724326152-7a82bf5eae72?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=5fe4dcf894fbb997b29a76c6c9a9c32c&auto=format&fit=crop&w=979&q=80',
    descrption: 'West Rim Trail, Grand Canyon Village, United States'
  },
  {
    name: 'Kedarkantha Peak, Singtur Range, India', 
    image: 'https://images.unsplash.com/photo-1479741044197-d28c298f8c77?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=00a8cfc7aba62bd47f10abd96551cb1d&auto=format&fit=crop&w=1050&q=80',
    descrption: 'Kedarkantha Peak, Singtur Range, India'
  },
  {
    name: 'Pease in valley, Heaven', 
    image: 'https://images.unsplash.com/photo-1508834284742-68b914688ebc?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=672cafac08bc7e2bbf3fe9f2576a6e4d&auto=format&fit=crop&w=1050&q=80',
    descrption: 'Pease in valley, Heaven'
  },
]

const seedDB = () => {
  // Remove all Campgrounds
  Campground.deleteMany({}, (err) => {
    if(err) {
      console.log(err)
    } else {
      console.log('Remove Campgrounds!')
      // add a few campgrounds
      data.forEach(seed => {
        Campground.create(seed, (err, campground) => {
          if(err) {
            console.log(err)
          } else {
            console.log('added a campground')
            // add a few comments
            Comment.create(
              {
                text: 'This place is great, but I wish there was internet',
                author: 'Homer'
              }, (err, comment) => {
                if(err) {
                  console.log(err)
                } else {
                  campground.comments.push(comment)
                  campground.save()
                  console.log('Created new comment')
                }
              })
          }
        })  
      })
    }
  })
  
}

module.exports = seedDB
