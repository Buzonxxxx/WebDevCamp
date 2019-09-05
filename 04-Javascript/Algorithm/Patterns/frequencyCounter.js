/*
 * 1.
 * i.g. "hello" => {h:1, e:1, l:2, o:1}
 * 
 * 
 * loop over the string for each char
 * handle uppperCase and lowerCase char by toLowerCase()
 * filter out non-number/letter char by regexp
 * if char not in obj, add char and count = 1 to obj
 * if char in obj, add count to obj
 * return obj
 */

const charCount1 = str => {
	let result = {};
  for(let char of str){
		char = char.toLowerCase();
    if(/[a-z0-9]/.test(char)) {
      char in result? result[char] + 1 : result[char] = 1;	
    }
  }
	return result;
}

const charCount2 = str => {
	const result = {}
	for (let i = 0; i < str.length; i++){
    const char = str[i].toLowerCase();
		if(/[a-z0-9]/.test(char)){
			if(!result[char]){
				result[char] = 1
			}
			else {
				result[char] = result[char] + 1
			}
		}
	}
	return result
}
// console.log(charCount1("Hello, World!!!"))
// console.log(charCount2("Hello, World!!!"))

/* 
 * 2.
 * isAnagram('','') // true
 * isAnagram('car', 'rca') // true
 * isAnagram('cat', 'acb') // false
 *   
 * 
 * check string length
 * put str1 char in obj and add count
 * loop str2 to get char
 * if char not in obj => false
 * if chat in obj => count - 1, if complete the loop, return true 
 */

const anagram = (first, second) => {
  if (first.length !== second.length) return false
  const result = {};
  for (let i = 0; i < first.length; i++) {
    let charA = first[i];
    if (!result[charA]){
      result[charA] = 1;
    }
    else {
      result[charA] = result[charA] + 1;
    }
  }
  console.log(result)

  for (let i = 0; i < second.length; i++) {
    let charB = second[i];
    if (!result[charB]) {
      return false;
    }
    else {
      result[charB] = result[charB] -1;
    }
  }
  console.log(result)
  return true;
}
// console.log(anagram('anagrams', 'nagarams'))

/*
 * 3.
 * Write a function called same, which accepts two arrays. 
 * The function should return true if every value in the first array has it's corresponding value squared 
 * in the second array. The frequency of values must be the same.
 *
 *
 * e.g. [1,2,3,2], [9,1,4,4]
 * 
 * 
 * // loop arr1 and put element and it's count
 * // loop arr2 and get each element 
 * // if arr2 element !== key** in obj => return false
 * // if arr2 element == key** in obj,obj count -1
 * // return true
 *  
*/

const same = (arr1, arr2) => {
  const result = {};
  for (let i = 0; i < arr2.length; i++){
    if (!result[arr2[i]]) {
      result[arr2[i]] = 1;
    }
    else {
      result[arr2[i]] = result[arr2[i]] + 1;
    }
    console.log(result)
  }
  for (let i = 0; i < arr1.length; i++){
    if(!result[arr1[i]**2] ) return false
    else {
      result[arr1[i]**2] = result[arr1[i]**2] - 1;
    }
  }
  return true
}
// console.log(same([1,2,3,2], [9,1,4,4]))

/* 
 * 4.
 * Implement a function called countUniqueValues, which accepts a sorted array, 
 * and counts the unique values in the array. There can be negative numbers in the array, 
 * but it will always be sorted.
 * 
 * i.g. [1,1,1,2,2,3,4,5,6,7,7] => return 7
 * 
 * 
 * loop array and put element and count in object : [1,1,2,3] => {'1': 2, '2': 1, '3': 1}
 * count the object size
 * return size
 */

 const countUniqueValues1 = arr => {
   const result = {};
  for (let i = 0; i < arr.length; i++) {
    if(!result[arr[i]]) {
      result[arr[i]] = 1;
    }
    else {
      result[arr[i]] = result[arr[i]] + 1;
    }
  }
  return Object.keys(result).length
 }
 
 const countUniqueValues2 = arr => {
   // [Use set object]  
   let set =  new Set(arr)
  //  console.log([...set])
   return set.size;
  }
// console.log(countUniqueValues1([1,1,1,2,2,3,4,5,6,7,7]))
// console.log(countUniqueValues2([1,1,1,2,2,3,4,5,6,7,7]))

/* 
 * 5.
 * Given a sorted array of integers, write a function called search, 
 * that accepts a value and returns the index where the value passed to the function is located. 
 * If the value is not found, return -1
 *
 * i.g. search([1,2,3,4,5,6],4) // 3  
 * 
 * 
 * // loop array and put number and it's index in object
 * // if n in obj's key, return obj's value
*/

const search = (arr, n) => {
  const result = {};
  for (let i = 0; i < arr.length; i++ ) {
    if (!result[arr[i]]) {
      result[arr[i]] = i;
    }
  }
  if (n in result ) return result[n]
  else return -1
}

// console.log(search([1,2,3,4,5,6],4)) // 3  
// console.log(search([1,2,3,4,5,6],6)) // 5
// console.log(search([1,2,3,4,5,6],11)) // -1