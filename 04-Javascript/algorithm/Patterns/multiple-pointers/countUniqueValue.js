// Implement a function called countUniqueValues, which accepts a sorted array, 
// and counts the unique values in the array. There can be negative numbers in the array, 
// but it will always be sorted.

// [-3, -2, -1, 0, 1, 2, 3] => 7

// [two pointer solution]
function countUniqueValues(arr){
  if(arr.length === 0){
    return 0;
  } 
  var i = 0;
  for(var j = 1; j < arr.length; j++){
      if(arr[i] !== arr[j]){
          i++;
          arr[i] = arr[j]
      }
  }
  return i + 1;
}
console.log(countUniqueValues([1,2,2,5,7,7,99]))

// [reduce solution]
function best(arr){
  var uniq = arr.reduce(function(a,b){
    if (a.indexOf(b) < 0 ){
      a.push(b);
    }
    return a;
    },[]);
  return uniq.length
}
console.log(best([1,2,3,4,4,4,7,7,12,12,13]))

// [Use set object]  
let set =  new Set([1,1,1,1,1,2])
console.log(set.size);

