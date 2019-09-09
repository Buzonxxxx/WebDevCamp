let obj = {
  a: 'one',
  b: 'two',
  c: 'three',
}

// count object size
// console.log(Object.keys(obj).length)
// console.log(Object.values(obj).length)

// console.log(Object.keys(obj))
// console.log(Object.values(obj))

// entries: obj to array
// console.log(Object.entries(obj))
// console.log(Object.create(obj))
// console.log(obj.hasOwnProperty('a'))

let entries = Object.entries(obj)
for (let entry of entries) {
  // console.log(`key: ${entry[0]}, value: ${entry[1]}`)
}

// Object.assign(target, ...sources)

const o1 = {a: 1};
const o2 = {b: 2};
const o3 = {c: 3};

const merge = Object.assign(o1, o2, o3);
console.log(merge); //{a: 1, b: 2, c: 3}
console.log(o1); //{a: 1, b: 2, c: 3}