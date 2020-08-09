// 不知道結束條件時使用
const target = Math.floor(Math.random() * 10);
let guess = Math.floor(Math.random() * 10);

while (guess != target) {
	console.log(`Target: ${target} Guess ${guess}`);
	guess = Math.floor(Math.random() * 10);
}
console.log(`Target: ${target} Guess ${guess}`);
console.log('CONGRATS YOU WIN!');
