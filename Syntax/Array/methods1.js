// push: add to the end of an array
// pop:  remove the last item of an array
// (faster than shift/unshift)
const arr = [1, 2, 3];
arr.push(4);
console.log(arr);
// [1,2,3,4]

arr.pop();
console.log(arr);
// [1,2,3]


// unshift: add to the in front of an array
// shift:   remove the first item of an array
const arr2 = [1, 2, 3];
arr2.shift();
console.log(arr2);
// [2,3]

arr2.unshift(1);
console.log(arr2);
// [1,2,3]
