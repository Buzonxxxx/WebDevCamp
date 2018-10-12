/*
return a obj 
i.g. "hello" => {h:1, e:1, l:2, o:1}

Solution:
1. loop over the string for each char
2. if char is number/letter and is a key in obj, add one
3. if char is number/letter and is a key not in obj, add it in and set value 1
4. if char is something else(space..), do nothing
5. return obj

*/

// Original
function charCount(str){
	let result = {};
	for(i=0; i<str.length; i++){
		let char = str[i].toLowerCase();
    if(/[a-z0-9]/.test(char)){
      if(char in result){
        result[char]++;
      }
      else{
        result[char] = 1;	
      }
    } 	
  }
	return result;
}
console.log(charCount("Hello, World!!!"))

// Refactor version
// function charCount(str) {
//   var result = {}
//   for(var char of str){
//     char = char.toLowerCase()
//     if(/[a-z0-9]/.test(char))
//       result[char] = ++result[char] | 1
//   }
//   return result
// }
// console.log(charCount("Hello, World!!!"))

// without regexp version
// function charCount(str) {
//   var result = {}
//   for(var char of str){
//     if(isAlphaNumeric(char)){
//       char = char.toLowerCase()
//       result[char] = ++result[char] | 1
//     }
//   }
//   return result
// }
// console.log(charCount("Hello, World!!!"))

// function isAlphaNumeric(char) {
//   var code = char.charCodeAt(0)
//   if( !(code > 47 && code < 58) && // numeric (0~9)
//       !(code > 64 && code < 91) && // upper alpha (A-Z)
//       !(code > 96 && code < 123))   // lower alpha (a-z) 
//       {
//         return false
//       }
//   return true
// }
