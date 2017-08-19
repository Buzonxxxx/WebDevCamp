

function isUniform(array){
//forEach then compare each element with array[0]	
	var value = true;
	array.forEach(function(x){
	if (x !== array[0]){
		value = false;
		}		
	});
	if (value === true){
	console.log("true");
	}
	else{
	console.log("false");
	}
}

function sumArray(array){
//forEach then sum up
	var sum = 0;
	array.forEach(function(x){
		sum+=x;
	});
	console.log(sum);
}

function max(array){
//forEach then return max
	var max = [];	
	array.forEach(function(x){
		if (x >= array[0]){
		max.unshift(x);
		}
	});
	console.log(max[0]);
}
// printReverse([1,2,3,4]);
// printReverse(["a", "b", "c"]);
// isUniform([1,1,1,1,1]);
// isUniform([1,1,2,1,1]);
// sumArray([10,3,10,4]);
// max([-5,100]);
