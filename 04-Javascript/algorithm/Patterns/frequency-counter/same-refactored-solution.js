/**
 Q.  Write a function called same, which accepts two arrays. 
    The function should return true if every value in the array has it's corresponding value squared 
    in the second array. The frequency of values must be the same.

 * Solution:
 *  1. put array into frequency counter then compare two counter's key and value
 * 
 * 
 * e.g. [1 ,2 ,3 ,4 ,5] => {'1': 1, '2': 1, '3': 1, '4': 1, '5': 1} 
 *      [4, 1, 9, 16, 25] => {'1': 1, '4': 1, '9': 1, '16': 1, '25': 1}
 * 
 * [note]
 * for...in: loop over keys in obj
 * for...of: loop over array 
 * 'in' operator returns true if the specific key is in the object 
 * 
 */     
function same(arr1, arr2){
	if(arr1.length !== arr2.length){
	    return false;
    }
	let counter1 = {};
	let counter2 = {};
	for(let i of arr1){
	    counter1 = (counter1[i] || 0) +1;
    }
    for(let i of arr2){
	    counter2 = (counter2[i] || 0) +1;
    }
    for(let key in counter1){
        if(!(key**2 in counter2)){
            return false;
        }
        if(counter1[key] !== counter2[key**2]){
            return false;
        }
    }
    return true;
}



console.log(same([1,2,3,2], [9,1,4,4]))

// O(n)