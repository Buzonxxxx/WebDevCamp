// Start looping from with a variable called i the end of the array towards the beginning
// Start an inner loop with a variable called j from the beginning until i - 1
// If arr[j] is greater than arr[j+1], swap those two values!
// Return the sorted array

// [3,2,5,6,3] => [2,3,3,5,6]

// const swap = (arr, index1, index2) => {
//   [arr[index1], arr[index2]] = [arr[index2], arr[index1]];
// } 

function swap(arr, index1, index2){
  var temp = arr[index1];
  arr[index1] = arr[index2];
  arr[index2] = temp;
}

function bubbleSort(arr) {
  var noSwap;
  for (let i = 0; i < arr.length; i++) {
    noSwap = true;
    for (let j = 0; j < arr.length; j++) {
      if(arr[j] > arr[j+1]) {
        swap(arr, i, j);
        noSwap = false;
      }
    }
    if(noSwap) break;
  }
  return arr
}

console.log(bubbleSort([3,2,5,6,3]))

// O(n^2), best: O(n)
// 兩個兩個比較要不要換