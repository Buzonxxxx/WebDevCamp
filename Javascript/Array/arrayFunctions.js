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

// unshift: add to the in front of an array
// shift:   remove the first item of an array
let reverse = [];
function printReverse(array) {
  array.forEach(num1 => reverse.unshift(num1))
  console.log(reverse)
}
printReverse([1, 2, 3, 4, 5])

//indexOf: find the index of an item in an 
//not result return -1
console.log(names.indexOf('xxx'))
console.log(names.indexOf('John'))

const ages = [11, 22, 33, 44, 55, 66]
// slice: 从起点开始，到终点'之前'之间所有元素的新数组
// array.slice(start, end)
    console.log(ages.slice())
    console.log(ages.slice(1,3))
    
// splice: 抓出要刪除的元素並替換新的元素
// array.splice(index,n,替換元素1，替換元素2…)
    console.log(ages.splice(4, 2, 77, 88))
    console.log(ages)


