// // is even?
// const isEven = num => num % 2 === 0 ? true : false
// console.log(isEven(333))

// factorial 練習改用遞迴寫

const factorial = num => {
	sum = 1
	for (let i = 1; i <= num; i++) {
		sum *= i;
	}
	return sum
}
console.log(factorial(10));
