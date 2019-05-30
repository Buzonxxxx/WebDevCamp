// push: add to the end of an array
// pop:  remove the last item of an array

// faster than shift/unshift

const images = 
[
  { height: 10, width: 30 },
  { height: 20, width: 90 },
  { height: 54, width: 32 }
]

let areas = [];
images.forEach(image => areas.push(image.height * image.width))
console.log(areas)
// [ 300, 1800, 1728 ]

console.log(areas.pop())
console.log(areas)
// [ 300, 1800 ]

areas.push('100')
console.log(areas)
// [ 300, 1800, '100' ]