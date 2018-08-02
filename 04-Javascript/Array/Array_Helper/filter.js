//filter()回傳是true的element

const products = [
  { name: 'cucumber', type: 'vegetable', quantity: 33, price: 1 },
  { name: 'banana', type: 'fruit', quantity: 10, price: 1 },
  { name: 'carrot', type: 'vegetable', quantity: 30, price: 13 },
  { name: 'apple', type: 'fruit', quantity: 15, price: 12 },
]
console.log(products.filter(product => product.type === 'vegetable'))
console.log(products.filter(product => product.type === 'fruit' && product.quantity < 20 && product.price > 10))

//real use case
const post = { id: 4, title: 'New Post' }
const comments = [
  { postId: 4, content: 'awesome post' },
  { postId: 3, content: 'it was ok' },
  { postId: 4, content: 'neat' },
]
const commentsForPost = (post, comments) => {
  return comments.filter(comment => comment.postId === post.id)
}
console.log(commentsForPost(post, comments))

