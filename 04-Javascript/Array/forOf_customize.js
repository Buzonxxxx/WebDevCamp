const myforEach = (arr,func) => {
	for (const i of arr){
		func(i)
	}
}

var numbers = [1,2,3,4,5];
myforEach(numbers, console.log);