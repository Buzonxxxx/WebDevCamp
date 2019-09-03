// 比較兩個array/object

// filter()回傳符合條件的element的組成的新array
const post = { id: 4, title: 'New Post' }
const comments = [
  { postId: 4, content: 'awesome post' },
  { postId: 3, content: 'it was ok' },
  { postId: 4, content: 'neat' },
]
const commentsForPost = (post, comments) => comments.filter(comment => comment.postId == post.id)
console.log(commentsForPost(post, comments))

// find() 與 filter() 很像，
// 但 find() 只會回傳一次值，且是第一次為 true 的值。
const oneCommentForPost = (post, comments) => comments.find(comment => comment.postId == post.id)
console.log(oneCommentForPost(post, comments))