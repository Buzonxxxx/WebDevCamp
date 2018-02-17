// push: add to the end of an array
// pop:  remove the last item of an array
const images = [
  { height: 10, width: 30 },
  { height: 20, width: 90 },
  { height: 54, width: 32 }
]
let areas = [];
images.forEach(image => areas.push(image.height * image.width))
console.log(areas)

areas.pop()
console.log(areas)
areas.push('100')
console.log(areas)