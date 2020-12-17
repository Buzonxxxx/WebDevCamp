/**
 * [Frequency Counter]
 * Given two positive integer numbers, find out if two numbers have the same frequency of digits
 * Time: O(N)
 * i.g.
 * sameFrequency(182, 281) // true
 * sameFrequency(34, 14) // false
 * sameFrequency(3589578, 5879385) // true
 * sameFrequency(22, 222) // false
 *
 */

/**
 * 1. Convert numbers to string
 * 2. Loop string 1 and put each digit/count in object
 * 3. Loop string 2
 *   - if digit in object, count - 1
 *   - if digit not in object, return false
 *   - else return true
 */

const sameFrequency = (num1, num2) => {
  const str1 = num1.toString();
  const str2 = num2.toString();
  if (str1.length !== str2.length) {
    return false;
  }
  const result = {};
  for (let i = 0; i < str1.length; i++) {
    if (!result[str1[i]]) {
      result[str1[i]] = 1;
    } else {
      result[str1[i]] += 1;
    }
  }
  for (let i = 0; i < str2.length; i++) {
    if (!result[str2[i]]) {
      return false;
    }
    result[str2[i]] -= 1;
  }
  return true;
};

console.log(sameFrequency(182, 281)); // true
console.log(sameFrequency(34, 14)); // false
console.log(sameFrequency(3589578, 5879385)); // true
console.log(sameFrequency(22, 222)); // false
