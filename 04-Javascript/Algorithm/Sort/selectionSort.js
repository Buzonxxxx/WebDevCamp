// Store the first element as the smallest value you've seen so far.
// Compare this item to the next item in the array until you find a smaller number.
// If a smaller number is found, designate that smaller number to be the new "minimum" and continue until the end of the array.
// If the "minimum" is not the value (index) you initially began with, swap the two values.
// Repeat this with the next element until the array is sorted.

// loop後找到最小的, 放到最前面

const selectSort = arr => {
  for(i = 0; i < arr.length; i++){
    let minIndex = i;
    // find minimum value's index
    for(j = i + 1; j < arr.length; j++){
      if(arr[j] < arr[minIndex]){
        minIndex = j;
      } 
    }
    if(i !== minIndex) {
      // swap
      let temp = arr[minIndex];
      arr[minIndex] = arr[i];
      arr[i] = temp;
    }
  }
  return arr;
}

console.log(selectSort([3,2,5,6,3]))

// O(n^2)