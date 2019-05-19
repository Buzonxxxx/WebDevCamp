// some()把Array中的元素都走一次，但是回傳條件只要其中有一個元素符合就會回傳True

var computers1 = [
  {name: 'Apple', ram: 16},
  {name: 'Acer', ram: 4},
  {name: 'HP', ram: 32},
]
var result = computers1.some( computer => computer.ram >18)
console.log(result)

//every() 把Array中的元素都走一次，回傳條件全部符合才會回傳True
const computers2 = [
  { name: 'Apple', ram: 16 },
  { name: 'Acer', ram: 4 },
  { name: 'HP', ram: 32 },
]
console.log(computers2.every(computer => computer.ram > 18))
// false

const isUniform = array => array.every(el => el === array[0])
console.log(isUniform([1, 1, 1, 1, 1]))
// true



