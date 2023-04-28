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

// Obj

const numJewelsInStones = (J, S) => {
	const sCount = {}
	let total = 0
	for(let item of S) {
		if (sCount[item]) {
			sCount[item]++
		} else {
			sCount[item] = 1
		}
	}

	for(let item of J) {
		if (sCount[item]) {
			total += sCount[item]
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
