
/*
 * [Frequency Counter]
 * Write a function called same, which accepts two arrays.
 * The function should return true if every value in the first array has it's corresponding value squared
 * in the second array. The frequency of values must be the same.
 *
 *
 * e.g. [1,2,3,2], [9,1,4,4]
 *
 *
 * // loop arr2 and put element and it's count
 * // loop arr1 and get each element
 * // if arr1's element** not in obj => return false
 * // if arr1's element** in obj, obj count -1
 * // return true
 *
*/

const same = (arr1, arr2) => {
  const result = {};
  for (let num of arr2) {
    if (result[num]) {
      result[num]++
    } else {
      result[num] = 1
    }
  }

  for (let i = 0; i < arr1.length; i++) {
    if (!result[arr1[i] ** 2]) {
      return false;
    }
    result[arr1[i] ** 2] -= 1;
  }
  return true;
};
console.log(same([1, 2, 3, 2], [9, 1, 4, 4]));


// for (let i = 0; i < arr2.length; i++) {
//   if (!result[arr2[i]]) {
//     result[arr2[i]] = 1;
//   } else {
//     result[arr2[i]] += 1;
//   }
// }

// for (let i = 0; i < arr1.length; i++) {
//   if (!result[arr1[i] ** 2]) {
//     return false;
//   }
//   result[arr1[i] ** 2] -= 1;
// }
// return true;