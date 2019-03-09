//find VS. filter 
//find() 與 filter() 很像，
// 但 find() 只會回傳一次值，且是第一次為 true 的值。
const users = [
  { name: 'Alex' },
  { name: 'Louis' },
  { name: 'Jane' },
  { name: 'Alex' }
]

console.log(users.find(user => user.name === 'Alex'))
// { name: 'Alex' }

