//Two types to declare function

// 1. Function statement (better)
function capitalize1(str){
	return str[0].toUpperCase() + str.slice(1)
}
// 2. Function expression (might be replaced)
const capitalize2 = function(str){
	return str[0].toUpperCase() + str.slice(1)
}

console.log(capitalize1("louisliao"))
console.log(capitalize2("louisliao"))

//is even?
const isEven = num => num % 2 === 0 ? true : false
console.log(isEven(333))

//factorial
const factorial = num => {
	sum = 1
	for (let i = 1; i <= num; i++) {
		sum *= i;
	}
	return sum
}
console.log(factorial(10));

//replace "-" to "_"
const KebabToSnake = (str) => res = str.replace("-","_");
console.log(KebabToSnake("Hello-world"));

// Pass function to another function
setInterval(() => {
	console.log("I am an anonymous function.")
	console.log("THIS IS AWSOME!")
}, 2000)