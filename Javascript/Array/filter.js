var products = [
  { name: 'cucumber', type: 'vegetable', quantity: 33, price: 1},
  { name: 'banana', type: 'fruit', quantity: 10, price: 1},
  { name: 'carrot', type: 'vegetable', quantity: 30, price: 13},
  { name: 'apple', type: 'fruit', quantity: 15, price: 12},
  { name: 'ginger', type: 'vegetable', quantity: 90, price: 5},
]
//single filter
var filter_products = products.filter(function(product){
  return product.type ==='vegetable'
})
console.log(filter_products)

//multiple filter
var moreFilter = products.filter(function(product){
  return product.type ==='fruit' 
  && product.quantity < 20 
  && product.price >10
})
console.log(moreFilter)

//real use case
var post = {id: 4, title: 'New Post'}
var comments = [
  {postId: 4, content: 'awesome post'},
  {postId: 3, content: 'it was ok'},
  {postId: 4, content: 'neat'},
]
function commentsForPost(post, comments){
  return comments.filter(function(comment){
    return comment.postId === post.id
  })
}
console.log(commentsForPost(post, comments))

