// 展開運算子是"把一個陣列展開(expand)成個別數值"的速寫語法

// Sample 1
const familySmith = ['John', 'Jane', 'Mark']
const familyMiller = ['Mary', 'Bob', "Ann"]

// old solution
const bigFamily1 = familySmith.concat(familyMiller)
console.log(bigFamily1)

// with spread operator
const bigFamily2 = [...familySmith, 'Louis', ...familyMiller]
console.log(bigFamily2)




// Sample 2
const validateShoppingList = (...items) => {
  if (items.indexOf('milk') < 0 ) {
    return ['milk', ...items]
  }
  return items
}

console.log(validateShoppingList('oranges', 'bread', 'eggs')) 