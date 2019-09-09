// O(n^2), best: O(n)
// 依序兩個兩個比較，把大的往後丟

// Start looping from with a variable called i the end of the array towards the beginning
// Start an inner loop with a variable called j from the beginning until i - 1
// If arr[j] is greater than arr[j+1], swap those two values!
// Return the sorted array

const bubbleSort = arr => {
  let noSwap;
  for (let i = arr.length; i > 0; i--) {
    noSwap = true;
    for (let j = 0; j < i - 1; j++) {
      // console.log(arr, arr[j], arr[j+1])
      if(arr[j] > arr[j+1]) {
        // swap
        let temp = arr[j];
        arr[j] = arr[j+1];
        arr[j+1] = temp;
        noSwap = false;
      }
    }
    if(noSwap) break;
  }
  return arr
}

console.log(bubbleSort([3,2,5,6,3]))