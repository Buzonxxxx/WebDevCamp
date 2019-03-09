
const users = [
  { name: 'Alex' },
  { name: 'Louis' },
  { name: 'Jane' },
  { name: 'Alex' }
]

console.log(users.findIndex(user => user.name === 'Alex'))
// 0
