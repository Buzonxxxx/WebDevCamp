function isUniform(array) {
	let value = true
	for (const v of array) {
		if (v !== array[0]) {
			value = false
		}
	}
	if (value === true) {
		console.log("true");
	}
	else {
		console.log("false");
	}
}

function sumArray(array) {
	let sum = 0
	for (const i of array) {
		sum += i
	}
	console.log(sum);
}

function max(array) {
	let max = []
	for (const v of array) {
		if (v >= array[0]) {
			max.unshift(v)
		}
	}
	console.log(max[0]);
}


isUniform([1,1,1,1,1]);
isUniform([1,1,2,1,1]);
sumArray([10,3,10,4])
max([-5, 100]);
