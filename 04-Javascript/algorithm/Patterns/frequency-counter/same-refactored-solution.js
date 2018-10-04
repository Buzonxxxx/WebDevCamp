/**
 * Q. accept 2 arrays, check if all one array's elements' square are in another array
 * Solution:
 *  1. 
 * 
 * 
 * for...in: loop over keys in obj
 * for...of: loop over array 
 * in operator returns true if the specific key is in the object 
 */

function same(arr1, arr2){
    if(arr1.length !== arr2.length){
        return false;
    }
    let frequencyCounter1 = {}
    let frequencyCounter2 = {}
    for(let val of arr1){
        frequencyCounter1[val] = (frequencyCounter1[val] || 0) + 1
    }
    for(let val of arr2){
        frequencyCounter2[val] = (frequencyCounter2[val] || 0) + 1        
    }
    console.log(frequencyCounter1);
    console.log(frequencyCounter2);
    for(let key in frequencyCounter1){
        if(!(key ** 2 in frequencyCounter2)){
            return false
        }
        if(frequencyCounter2[key ** 2] !== frequencyCounter1[key]){
            return false
        }
    }
    return true
}

if(same([1,2,3,2,5], [9,1,4,4,25])){
    console.log('Yes')
} else {
    console.log('No')
}

