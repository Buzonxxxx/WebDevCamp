// Implement a function called countUniqueValues, which accepts a sorted array, 
// and counts the unique values in the array. There can be negative numbers in the array, 
// but it will always be sorted.
/*
example:
    [1,1,1,2,2,3,4,5,6,7,7] => return 7
     i j
 
 - if i !== j, count + 1
 - if i === j, move i, j  

*/
// [1, 2, 3, 3, 4] => [1, 2, 3, 3, 4] => [1, 2, 3, 3, 4] => [1, 2, 3, 3, 4] => [1, 2, 3, 4, 4]
//  i  j                  i  j                  i  j               i     j               i  j

const countUniqueValues = arr => {
	let i = 0;
	let counter = 1;
	for(let j = i+1; j < arr.length; j++){
    if(arr[i] !== arr[j]){
      counter++;
      arr[i] = arr[j];
    }
  }
  return counter;
}
console.log(countUniqueValues([1, 2, 3, 3, 4]))

// [reduce solution]
const countByReduce = arr => {
  let uniq = arr.reduce((arr,num) => {
    if (arr.indexOf(num) === -1 ) arr.push(num);
    return arr;
    },[]);
  return uniq.length
}
console.log(countByReduce([1,2,3,4,4,4,7,7,12,12,13]))

// [Use set object]  
let set =  new Set([1,1,1,1,1,2])
console.log([...set])
console.log(set.size);

