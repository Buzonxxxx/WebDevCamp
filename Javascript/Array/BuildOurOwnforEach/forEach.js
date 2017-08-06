//ToReview

function myforEach(arr,func){
	//loop through array
	for (var i = 0; i < arr.length; i++) {
		//call func for each item in array
		func(arr[i]);
	}

}

var numbers = [1,2,3,4,5];
myforEach(numbers, console.log);
myforEach(numbers, function(num){console.log(num)});