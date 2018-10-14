/* 
let obj = {
  a: 'one',
  b: 'two',
  c: 'three',
}

Object.keys()
=> [a, b, c]

Object.value()
=> ['one', 'two', 'three']

Object.entries()
=> [ [ 'a', 'one' ], [ 'b', 'two' ], [ 'c', 'three' ] ]

hasOwnProperty('a')
=> true

=> all return an array
*/

let obj = {
  a: 'one',
  b: 'two',
  c: 'three',
}

console.log(Object.keys(obj))
console.log(Object.values(obj))
console.log(Object.entries(obj))
console.log(obj.hasOwnProperty('a'))

let entries = Object.entries(obj)

for (let entry of entries) {
  console.log(`key: ${entry[0]}, value: ${entry[1]}`)
}
