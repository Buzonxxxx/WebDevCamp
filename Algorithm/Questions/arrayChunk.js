// --- Directions
// Given an array and chunk size, divide the array into many subarrays
// where each subarray is of length size
// --- Examples
// chunk([1, 2, 3, 4], 2) --> [[ 1, 2], [3, 4]]
// chunk([1, 2, 3, 4, 5], 2) --> [[ 1, 2], [3, 4], [5]]
// chunk([1, 2, 3, 4, 5, 6, 7, 8], 3) --> [[ 1, 2, 3], [4, 5, 6], [7, 8]]
// chunk([1, 2, 3, 4, 5], 4) --> [[ 1, 2, 3, 4], [5]]
// chunk([1, 2, 3, 4, 5], 10) --> [[ 1, 2, 3, 4, 5]]

// Solution 1
// create an empty array to hold the chunked array
// loop unchunked array
// get the last element in chunked array
// if element does not exist or its length equal to chunk size
//    puch new chunk into chunked with current element
// else add current element to the chunk

// function chunk(array, size) {
//   const chunked = []
//   for(let element of array) {
//     const last = chunked[chunked.length - 1]
//     if (!last || last.length === size) {
//       chunked.push([element])
//     } else {
//       last.push(element)
//     }
//   }
//   return chunked
// }

console.log(chunk([1, 2, 3, 4], 2)) //[ [ 1, 2 ], [ 3, 4 ] ]
console.log(chunk([1, 2, 3, 4, 5], 2)) // [ [ 1, 2 ], [ 3, 4 ], [ 5 ] ]
console.log(chunk([1, 2, 3, 4, 5, 6, 7, 8], 10)) //[ [ 1, 2, 3 ], [ 4, 5, 6 ], [ 7, 8 ] ]


// #solution2: use slice()
// create empty array called chunked
// create index start at 0
// while index is less than array.length
//  push a slice of length "size" from array to chunked
//  add 'size' to index

function chunk(array, size) {
  const chunked = []
  let index = 0
  while(index < array.length) {
    chunked.push(array.slice(index, index + size))
    index += size
  }
  return chunked
}
