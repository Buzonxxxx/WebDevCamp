// [Frequency Counter]
// You're given strings J representing the types of stones that are jewels,
// and S representing the stones you have.
// Each character in S is a type of stone you have.
// You want to know how many of the stones you have are also jewels.
// The letters in J are guaranteed distinct, and all characters in J and S are letters.
// Letters are case sensitive, so "a" is considered a different type of stone from "A".

// Example 1:

// Input: J = "aA", S = "aAAbbbb"
// Output: 3

// Example 2:
// Input: J = "z", S = "ZZ"
// Output: 0
// Note:

// S and J will consist of letters and have length at most 50.
// The characters in J are distinct.

// put each stone in an obj with its count
// loop J and check if it is in the obj
// if it's in the obj, accumulate the count

// Obj

const numJewelsInStones = (J, S) => {
	const sCount = {}
	for (let stone of S) {
		if(sCount[stone]) {
			sCount[stone]++
		} else {
			sCount[stone] = 1
		}
	}
	let total = 0
	for (let jewel of J) {
		if(sCount[jewel]) {
			total += sCount[jewel]
		}
	}
	return total
};

// Map
// const numJewelsInStones2 = (J, S) => {
// 	const map = new Map();
// 	for (let i = 0; i < S.length; i++) {
// 		let charS = S[i];
// 		if (map.has(charS)) {
// 			map.set(charS, map.get(charS) + 1);
// 		} else {
// 			map.set(charS, 1);
// 		}
// 	}
// 	let sum = 0;
// 	for (let j = 0; j < J.length; j++) {
// 		let charJ = J[j];
// 		if (map.has(charJ)) {
// 			sum += map.get(charJ);
// 		}
// 	}
// 	return sum;
// };

console.log(numJewelsInStones('aA', 'aAAbbbb'));
console.log(numJewelsInStones('z', 'ZZ'));
// console.log(numJewelsInStones2('aA', 'aAAbbbb'));
// console.log(numJewelsInStones2('z', 'ZZ'));
