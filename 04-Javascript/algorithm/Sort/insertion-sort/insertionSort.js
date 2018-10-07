// Start by picking the second element in the array
// Now compare the second element with the one before it and swap if necessary.
// Continue to the next element and if it is in the incorrect order, iterate through the sorted portion (i.e. the left side) to place the element in the correct place.
// Repeat until the array is sorted.

// [1,2,9,76,4] => [1,2,9,76,4]


function swap(arr, index1, index2){
  temp = arr[index1];
  arr[index1] = arr[index2];
  arr[index2] = temp;
}

function insertionSort(arr){
  for(var i = 1; i < arr.length; i++){
    var currentVal = arr[i];
    for(var j = i - 1; j >= 0 && arr[j] > currentVal; j--){
      arr[j+1] = arr[j];
    }
    arr[j+1] = currentVal;
  }
  return arr;
}

console.log(insertionSort([1,2,9,-1,4]))
// O(n^2)