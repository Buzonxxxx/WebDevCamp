// Loop over keys in an object
const jeopardWinnings = {
	regularPlay: 2522700,
	tournamentOfChampions: 500000,
	battleOfDecades: 100000
};
for (const prop in jeopardWinnings) {
	console.log(prop, jeopardWinnings[prop]);
}

let total = 0;
for (const prop in jeopardWinnings) {
	total += jeopardWinnings[prop];
}
console.log(`Total earnings: ${total}`);

// 用for...in遍歷string，得到的是索引
const str = 'hello';
for (const x in str) {
	console.log(str[x]);
}
