var faker = require('faker');

// Reference: https://www.npmjs.com/package/faker

//10 random product names and prices
console.log("====================")
console.log("Welcome to my shop!")
console.log("====================")	
for(var i=0; i<10; i++){
console.log(faker.fake("{{commerce.productName}} - ${{commerce.price}}"));
}

console.log('---------------------------------------------------')

// fake name
console.log(faker.name.findName())
// fake email
console.log(faker.internet.email())
// random contact card containing many properties
console.log(faker.helpers.createCard())