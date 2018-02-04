//every() 把Array中的元素都走一次，但是回傳條件只要其中有一個元素不符合就會回傳False
const computers1 = [
  { name: 'Apple', ram: 16 },
  { name: 'Acer', ram: 4 },
  { name: 'HP', ram: 32 },
]
console.log(computers1.every(computer => computer.ram > 16))

// some()把Array中的元素都走一次，但是回傳條件只要其中有一個元素符合就會回傳True

var computers2 = [
  {name: 'Apple', ram: 16},
  {name: 'Acer', ram: 4},
  {name: 'HP', ram: 32},
]
var result = computers2.some( computer => computer.ram >16)
console.log(result)
