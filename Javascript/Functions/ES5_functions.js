
 const isEven = function(num){
	if (num%2 === 0){
		return true;
	}
	return false;
}
console.log(isEven(333));


const factorial = function(num){
	var sum = 1;
	for (var i = 1; i <=num; i++) {
		sum=sum*i;
	}
	return sum;
}
console.log(factorial(10));


const KebabToSnake = function(str){
	var res = str.replace("-","_");
	return res;
}
console.log(KebabToSnake("Hello-world"));