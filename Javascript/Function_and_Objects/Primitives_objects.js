//Primitives and objects

//Primitives , 改了就改了
let a = 12
let b = a
a = 46
console.log(a)
console.log(b)

//objects, 只是reference
const obj1 = {
  name: 'Louis',
  age: 34,
}
const obj2 = obj1
obj1.age = 30
console.log(obj1.age)
console.log(obj2.age)

//Functions
let age = 27
const obj = {
  name: 'Louis',
  city: 'Lisbon'
}
function change(a, b)
{
  a = 30,
  b.city = 'San Francisco'
}
change(age, obj)
console.log(age)
console.log(obj.city)
// console.log(a)