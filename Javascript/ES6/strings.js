let firstName = 'Louis'
let lastName = 'Liao'
const yearOfBirth = 1983
function calcAge(yearOfBirth){
  return new Date().getFullYear() - yearOfBirth
}
//ES5
// console.log('This is ' + firstName + ' ' + lastName +
//  '. Today, he is ' + calcAge(yearOfBirth) + ' years old.')

//ES6
console.log(`This is ${firstName} ${lastName}. Today, he is ${calcAge(yearOfBirth)} years old.`)

//string method
const n = `${firstName} ${lastName}`
console.log(n)
console.log(n.startsWith('L'))
console.log(n.endsWith('o'))
console.log(n.includes('ou'))
console.log(n.repeat(10))
console.log(`${firstName} ${lastName} `.repeat(10))