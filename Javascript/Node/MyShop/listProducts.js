var faker = require('faker');

// console.log(faker.fake("{{name.lastName}}, {{name.firstName}} {{name.suffix}}"));
// outputs: "Marks, Dean Sr."

//10 random product names and prices
console.log("====================")
console.log("Welcome to my shop!")
console.log("====================")	
for(var i=0; i<10; i++){
console.log(faker.fake("{{commerce.productName}} - ${{commerce.price}}"));
}
