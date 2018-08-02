const myforEach = (arr,func) => {
	// for .. of
	for (const i of arr){
		func(i)
	}
}

var numbers = [1,2,3,4,5];
myforEach(numbers, console.log);
myforEach(numbers, function(num){console.log(num)});