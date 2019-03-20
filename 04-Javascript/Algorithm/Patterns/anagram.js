/**
 * Q: Given two strings, write a function to determine if the second string is an anagram(易位構詞) of the first. 
 * An anagram is a word, phrase, or name formed by rearranging the letters of another, 
 * such as cinema, formed from iceman
 * 
 * example:
 * isAnagram('','') // true
 * isAnagram('car', 'rca') // true
 * isAnagram('cat', 'acb') // false
 *   
 */
const forLoop = (str1, str2) => {
	arr1 = str1.split('')
	arr2 = str2.split('')
	if (arr1.length !== arr2.length) return false

	for (let i = 0; i < arr1.length; i++) {
		let char = arr1[i]
		let index = arr2.indexOf(char)
		if (index === -1 ) return false
		else (arr2.splice(index, 1))
	}
	return true
}
console.log(forLoop('anagrams', 'nagarams'))
 //O(n^2)

const frequencyCounter = (first, second) => {
  if (first.length !== second.length) return false

  const lookup = {};
  for (let i = 0; i < first.length; i++) {
    let letter = first[i];
    // if letter exists, increment, otherwise set to 1
    lookup[letter] ? lookup[letter] += 1 : lookup[letter] = 1;
  }

  for (let i = 0; i < second.length; i++) {
    let letter = second[i];
    // can't find letter or letter is zero then it's not an anagram
    if (!lookup[letter]) return false;
    else lookup[letter] -= 1;
  }
  return true;
}
console.log(frequencyCounter('anagrams', 'nagarams'))
//O(n)