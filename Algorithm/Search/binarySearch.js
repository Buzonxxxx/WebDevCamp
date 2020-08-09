/*
 * Binary search
 * 切一半開始找
 *
 */

const binarySearch = (arr, num) => {
  let minIndex = 0; maxIndex = arr.length - 1;
  while (minIndex <= maxIndex) {
    const middleIndex = Math.floor((minIndex + maxIndex) / 2);
    const currentNum = arr[middleIndex];
    if (currentNum < num) {
      minIndex = middleIndex + 1;
    } else if (currentNum > num) {
      maxIndex = middleIndex - 1;
    } else {
      return middleIndex;
    }
  }
  return -1;
};
console.log(binarySearch([2, 5, 6, 9, 13, 15, 28, 30], 15));
// log(n)
