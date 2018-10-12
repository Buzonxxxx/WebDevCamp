/**
 * Q: Given two strings, write a function to determine if the second string is an anagram of the first. 
 * An anagram is a word, phrase, or name formed by rearranging the letters of another, 
 * such as cinema, formed from iceman
 * 
example:
    isAnagram('','') // true
    => {‘’: 1} 
    => {‘’: 1}

    isAnagram('car', 'rca') // true
    => {‘c’:1, ‘a’:1, ‘r’:s}
    => {‘r’:1, ‘c’:1. ‘a’:1}

    isAnagram('cat', 'acb') // false
    => {‘c’: 1, ‘a’: 1, ‘t’: 1}
    => {‘a’: 1, ‘c’: 1, ‘b’: 1}

 - if two strings length is different, return false

 - declare two frequency counters

 - loop over chars of str1 
 - if char is not in counter1, put char in counter and set value1
 - if char is already in counter1, increase 1 of char value

 - loop over chars of str2
 - if char is not in counter2, put char in counter and set value1
 - if char is already in counter2, increase 1 of char value

 - if key in counter 1 doesn’t in counter 2, return false
 - if each key’s value does not exist in counter 2, return false
*/

function isAnagram(str1,str2){
	if(str1.length !== str2.length) return false;
	let counter1 = {};
	let counter2 = {};
	for(i=0; i< str1.length; i++){
		counter1 = (counter1[i] || 0) + 1;
  }
  for(i=0; i< str2.length; i++){
		counter2 = (counter1[i] || 0) + 1;
  }
  for(let key in counter1){
	  if(!(key in counter2)) return false;
	  if(counter1[key] !== counter2[key]) return false;
  }
	return true;
}

 console.log(isAnagram('saaads', 'sdsaaa'))