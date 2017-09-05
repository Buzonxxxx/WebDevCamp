//Two types to declare function

// 1. Function declaration (better)
function capitalize1(str){
	return str.charAt(0).toUpperCase() + str.slice(1)
}
// 2. Function expression (might be replaced)
const capitalize2 = function(str){
	return str.charAt(0).toUpperCase() + str.slice(1)
}

//is even?
function isEven(num){
	while (num%2 === 0){
		return true;
	}
	return false;
}
console.log(isEven(333));

//factorial
function factorial(num){
	let sum = 1;
	for (let i = 1; i <=num; i++) {
		sum=sum*i;
	}
	return sum;
}
console.log(factorial(10));

//replace "-" to "_"
function KebabToSnake(str){
	const res = str.replace("-","_");
	return res;
}
console.log(KebabToSnake("Hello-world"));

//Function default parameters
function cars(car1="BMW", car2="Benz"){
	console.log(car1, car2)
}
cars()
cars("Toyota", "Honda")

// Pass function to another function
setInterval(function(){
	console.log("I am an anonymous function.")
	console.log("THIS IS AWSOME!")
}, 2000)