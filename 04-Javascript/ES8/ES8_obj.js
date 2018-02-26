/* 
Object.keys()
Object.value()
Object.entries()
*/

let obj = {
  a: 'one',
  b: 'two',
  c: 'three',
}

let keys = Object.keys(obj)
let values = Object.values(obj)
let entries = Object.entries(obj)
console.log(keys)
console.log(values)
console.log(entries)

for (let entry of entries) {
  console.log(`key: ${entry[0]}, value: ${entry[1]}`)
}