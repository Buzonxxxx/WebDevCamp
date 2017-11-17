const firstName = 'Louis'
const lastName = 'Liao'
const fullName = `${firstName} ${lastName}`
const yearOfBirth = 1983
const calcAge = (yearOfBirth) => new Date().getFullYear() - yearOfBirth
console.log(`This is ${fullName}. Today, he is ${calcAge(yearOfBirth)} years old.`)

//string method
console.log(fullName.startsWith('L'))
console.log(fullName.endsWith('o'))
console.log(fullName.includes('ou'))
console.log(`${fullName}\n`.repeat(10))