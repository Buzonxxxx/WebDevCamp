// Destructuring

//ES5
var john = ['john', 26]
var name = john[0]
var age = john[1]
console.log(name)
console.log(age)
//ES6
const [name1, age1] = ['Mike', 33]
console.log(name1)
console.log(age1)

const obj = {
  firstName: 'John',
  lastName: 'Smith'
}
const {firstName, lastName} = obj
console.log(firstName)
console.log(lastName)
const {firstName: a, lastName: b} = obj
console.log(a)
console.log(b)


function calcAgeRetirement(year) {
  const age2 = new Date().getFullYear - year
  return [age, 65 - age]
}
const [age2, retirement] = calcAgeRetirement(1990)
console.log(age2)
console.log(retirement)