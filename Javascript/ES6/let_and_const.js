/*
let and const are block scope
var is function scope
*/

//let => block scope
let i = 23;
for (let i = 0; i<5 ; i++){
  console.log(i)
}
console.log(i)

//var function scope
var j = 23;
for (var j = 0; j<5 ; j++){
  console.log(j)
}
console.log(j)