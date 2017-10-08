//find VS. filter 
//find() 與 filter() 很像，
// 但 find() 只會回傳一次值，且是第一次為 true 的值。
var users = [
  {name: 'Alex'},
  {name: 'Louis'},
  {name: 'Jane'},
  {name: 'Alex'}
]

var find = users.find(function(user){
  return user.name === 'Alex'
})
console.log(find)

var filter = users.filter(function(user){
  return user.name === 'Alex'
})
console.log(filter)

