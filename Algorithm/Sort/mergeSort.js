/*
 * It's a combination of two things - merging and sorting!
 * Exploits the fact that arrays of 0 or 1 element are always sorted
 * Works by decomposing an array into smaller arrays of 0 or 1 elements, then building up a newly sorted array
 *
 * 切到最小單位，再依序合併並排序
 * 用遞迴解
 *
 * 1. create function to merge 2 sorted arrays
 * 2. Implement mergeSort
 *
 * O(n log n)
 */

const merge = (arr1, arr2) => {
  const results = [];
  let i = 0; let
    j = 0;
  while (i < arr1.length && j < arr2.length) {
    if (arr1[i] <= arr2[j]) {
      results.push(arr1[i]);
      i += 1;
    } else {
      results.push(arr2[j]);
      j += 1;
    }
  }
  while (i < arr1.length) {
    results.push(arr1[i]);
    i += 1;
  }
  while (j < arr2.length) {
    results.push(arr2[j]);
    j += 1;
  }
  return results;
};
console.log(merge([1, 10, 50], [2, 14, 99, 100]));

const mergeSort = (arr) => {
  if (arr.length <= 1) {
    return arr;
  }
  const mid = Math.floor(arr.length / 2);
  const left = mergeSort(arr.slice(0, mid));
  const right = mergeSort(arr.slice(mid));
  return merge(left, right);
};
console.log(mergeSort([10, 24, 76, 73]));
