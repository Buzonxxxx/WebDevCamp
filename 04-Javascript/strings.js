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

str = '0xd76f54bc9b7f4d00417bd89ba45d9b2d775789a410c46b262fbe2039734c1cfc0x00000000000000000000000000000000000000000000000000000000000000000x000000000000000000000000d25afb1e21e0a425831fed9ac22d92c9b34bb736'
console.log([str.replace(/0x/g,'')])