//Declare array
const names = ['John', 'Jane', 'Mark']
const years = new Array(1990, 1969, 1948)
//change array vlaue
years[0] = '2000'

console.log(names, years[0])

// push: add to the end of an array
// pop:  remove the last item of an array
//forEach + push()
var images = [
  { height: 10, width: 30 },
  { height: 20, width: 90 },
  { height: 54, width: 32 }
];
var areas = [];
images.forEach(function (image) {
  areas.push(image.height * image.width)
})
console.log(areas)

// unshift: add to the in front of an array
// shift:   remove the first item of an array
//forEach + unshift()
var reverse = [];
function printReverse(array) {
  array.forEach(function (x) {
    reverse.unshift(x);
  });
}
printReverse([1, 2, 3, 4, 5])
console.log(reverse)

//indexOf: find the index of an item in an 
//not result return -1
console.log(names.indexOf('xxx'))

/*
slice: copy parts of an array
    aaa = xxx.slice(start, end count)
    aaa = xxx.slice(0, 2)
    bbb = xxx.slice()
splice: remove element in array
	aaa = xxx.splice(start, end count)
*/
