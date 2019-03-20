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

const charCount = str => {
	let result = {};
	// for(i = 0; i < str.length; i++){
  for(let char of str){
		char = char.toLowerCase();
    if(/[a-z0-9]/.test(char)) char in result? result[char]++ : result[char] = 1;	
  }
	return result;
}
console.log(charCount("Hello, World!!!"))
