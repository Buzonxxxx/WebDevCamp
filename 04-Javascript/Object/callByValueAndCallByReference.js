//Primitives and objects
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
console.log(age) // Primitives: call by value
console.log(obj.city) // Object:  call by reference