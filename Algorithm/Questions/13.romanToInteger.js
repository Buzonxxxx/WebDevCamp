//  Input: s = "MCMXCIV"
//  Output: 1994
//  Explanation: M = 1000, CM = 900, XC = 90 and IV = 4.

//
// check if s is valid
// init a total as 0
// loop the string
// if the next roman number > the current roman number 
//   => the actual value is next number - current number, add to total, increase the iterator by 1
// else add the current number to total


var romanToInt = function(s) {
	const table = {
			'I' : 1,
			'V' : 5,
			'X' : 10,
			'L' : 50,
			'C' : 100,
			'D' : 500,
			'M' : 1000
	}
	
	if (s.length === 0) return false
	let total = 0
	for (let i = 0; i < s.length; i++) {
			if (table[s[i]] < table[s[i + 1]]) {
					total = total + table[s[i + 1]] - table[s[i]]
					i++
			} else {
					total += table[s[i]]
			}
	}
	return total
};

console.log(romanToInt('XXXIV')); // 34
