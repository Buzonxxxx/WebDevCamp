let obj = {
  a: 'one',
  b: 'two',
  c: 'three',
}

console.log(Object.keys(obj))
console.log(Object.values(obj))

// entries: obj to array
console.log(Object.entries(obj))
console.log(Object.create(obj))
console.log(obj.hasOwnProperty('a'))

let entries = Object.entries(obj)

for (let entry of entries) {
  console.log(`key: ${entry[0]}, value: ${entry[1]}`)
}
