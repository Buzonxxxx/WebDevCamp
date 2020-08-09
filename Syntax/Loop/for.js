// for
for (let num = 1; num <= 10; num++) {
	console.log(`${num}x${num} = ${num * num}`);
}

console.log('==========');

// reverse word
const word = 'stressed';
let reversedWord = '';
for (let i = word.length - 1; i >= 0; i--) {
	reversedWord += word[i];
}
console.log(reversedWord);
