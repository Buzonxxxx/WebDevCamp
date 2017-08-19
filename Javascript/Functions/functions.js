isEven()
function isEven(num){
	if (num%2 === 0){
		return true;
	}
	return false;
}
console.log(isEven(333));

factorial()
function factorial(num){
	var sum = 1;
	for (var i = 1; i <=num; i++) {
		sum=sum*i;
	}
	return sum;
}
console.log(factorial(10));

KebabToSnake()
function KebabToSnake(str){
	var res = str.replace("-","_");
	return res;
}
console.log(KebabToSnake("Hello-world"));