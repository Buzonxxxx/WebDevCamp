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
 * 1. split string into char and put in array. "car" => ['c', 'a', 'r'], "rca" => ['r', 'c', 'a']
 * 2. check if two array's length are the same
 *    true: nex step
 *    false: return false     
 * 3. loop array 1 and find match in array 2
 *    match: remove char in array 2 and keep finding next char
 *    no match: return false
 *   
 */

 function isAnagram(str1, str2) {
   var arr1 = str1.split('')
   var arr2 = str2.split('')
   if(arr1.length !== arr2.length) {
     return false
   }
   for (var i = 0; i < arr1.length; i++) {
      var correctIndex = arr2.indexOf(arr1[i])
      if(correctIndex === -1){
        return false
      } 
      console.log(arr2)
      arr2.splice(correctIndex, 1)
   }
   return true
 }


 console.log(isAnagram('a', ''))

 //O(n^2)