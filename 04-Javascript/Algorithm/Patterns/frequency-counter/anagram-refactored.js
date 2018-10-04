/**
 * Q: Given two strings, write a function to determine if the second string is an anagram of the first. 
 * An anagram is a word, phrase, or name formed by rearranging the letters of another, 
 * such as cinema, formed from iceman
 * 
 * example:
 * isAnagram('','') // true
 * isAnagram('car', 'rca') // true
 * isAnagram('cat', 'acb') // false
 * 
 * [Solution 1]
 * 1. split string into char and put in array. "car" => ['c', 'a', 'r'], "rca" => ['r', 'c', 'a']
 * 2. check if two array's length are the same
 *    true: nex step
 *    false: return false     
 * 3. loop array 1 and find match in array 2
 *    match: remove char in array 2 and keep finding next char
 *    no match: return false
 * 
 * [Solution 2]
 *  1. split string into char and put in array. "car" => ['c', 'a', 'r'], "rca" => ['r', 'c', 'a']
 *  2. check if two array's length are the same
 *    true: nex step
 *    false: return false     
 *  3. turn arrays into counter object 
 *      ['c', 'a', 'r'] => {'c': 1, 'a': 1, 'r': 1}  
 *      ['r', 'c', 'a'] => {'r': 1, 'c': 1, 'a': 1}
 *  4. check obj1's key and count shoule be matched in obj2
 */

 function isAnagram(str1, str2) {
   if(str1.length !== str2.length) {
     return false
   }
   var counter1 = {};
   var counter2 = {};
   for(let i of str1){
     counter1[i] = (counter1[i] || 0 ) +1 
   }
   for(let i of str2){
    counter2[i] = (counter2[i] || 0 ) +1 
  }
  console.log(counter1)
  console.log(counter2)
  for (let key in counter1) {
    if(counter1[key] !== counter2[key]){
      return false
    }
    if(!(key in counter2)){
      return false
    }
  }
  return true
 }


 console.log(isAnagram('saaasd', 'sdsaaa'))