// 展開運算子是"把一個陣列展開(expand)成個別數值"的速寫語法

// Sample 1
const familySmith = ['John', 'Jane', 'Mark']
const familyMiller = ['Mary', 'Bob', "Ann"]

const bigFamily = [...familySmith, 'Louis', ...familyMiller]
console.log(bigFamily)


// Sample 2
const validateShoppingList = (...items) => {
  if (items.indexOf('milk') < 0 ) {
    return ['milk', ...items]
  }
  return items
}
console.log(validateShoppingList('oranges', 'bread', 'eggs')) 

// Sample 3
const max = array => Math.max(...array)
const min = array => Math.min(...array)

console.log(max([-5, 100]))
console.log(min([-5, 100]))

// 實作push, unshift, remove
const push = (x, array) => [...array, x]
const unshift = (x, array) => [x, ...array]
const remove = (index, arr) => [...arr.slice(0, index), ...arr.slice(index + 1)]


console.log(push(1, [2,3]))
console.log(unshift(1, [2,3]))
console.log(remove(1, [1,2,3]))