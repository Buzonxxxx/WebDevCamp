// unshift: add to the in front of an array
// shift:   remove the first item of an array

let reverseArray = [];
const reverse = array => array.forEach(num => reverseArray.unshift(num))

reverse([1, 2, 3, 4, 5])
console.log(reverseArray)
reverseArray.shift()
console.log(reverseArray)