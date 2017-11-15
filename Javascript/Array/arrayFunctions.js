//Declare array
const names = ['John', 'Jane', 'Mark']
const years = new Array(1990, 1969, 1948)
//change array vlaue
years[0] = '2000'
console.log(names, years[0])

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

// unshift: add to the in front of an array
// shift:   remove the first item of an array
let reverseArray = [];
const printReverse = array => {
  array.forEach(num => reverseArray.unshift(num))
}
printReverse([1, 2, 3, 4, 5])
console.log(reverseArray)
reverseArray.shift()
console.log(reverseArray)

//indexOf: find the index of an item in an 
//not result return -1
console.log(names.indexOf('xxx'))
console.log(names.indexOf('John'))

const ages = [11, 22, 33, 44, 55, 66]
// slice: Select elements from an array
// https://www.w3schools.com/jsref/jsref_slice_array.asp
// array.slice(start, end(不算))
console.log(ages.slice(1, 3))

// splice: adds/removes items to/from an array, and returns the removed item(s).
// syntax: array.splice(index, howmany, item1, ....., itemX)
// array.splice(index,n,(替換元素1)，(替換元素2)…)
console.log(ages.splice(0, 1))
console.log(ages)

console.log(ages.splice(4, 2, 'xd', 'kk'))
console.log(ages)


