// Store the first element as the smallest value you've seen so far.
// Compare this item to the next item in the array until you find a smaller number.
// If a smaller number is found, designate that smaller number to be the new "minimum" and continue until the end of the array.
// If the "minimum" is not the value (index) you initially began with, swap the two values.
// Repeat this with the next element until the array is sorted.

function swap(arr, index1, index2){
  var temp = arr[index1];
  arr[index1] = arr[index2];
  arr[index2] = temp;
}

function selectSort(arr){
  for(i = 0; i < arr.length; i++){
    let min = i;
    for(j = i + 1; j < arr.length; j++){
      if(arr[j] < arr[min])min = j;
    }
    if(i !== min) swap(arr, min, i)
  }
  return arr;
}

console.log(selectSort([3,2,5,6,3]))

// O(n^2)