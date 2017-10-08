//把Array中的元素都走一次，
// 但是回傳條件只要其中有一個元素不符合就會回傳False

var computers = [
  {name: 'Apple', ram: 16},
  {name: 'Acer', ram: 4},
  {name: 'HP', ram: 32},
]

var result = computers.every(function(computer){
  return computer.ram >16
})
console.log(result)
