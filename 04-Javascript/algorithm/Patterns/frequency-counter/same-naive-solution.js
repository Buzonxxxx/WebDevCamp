/*
Q.  Write a function called same, which accepts two arrays. 
    The function should return true if every value in the array has it's corresponding value squared 
    in the second array. The frequency of values must be the same.

Solution:
    1. check: array length
    2. check if arr1's element's square in arr2? if yes, remove element in arr2 and keep checking

e.g. [1 ,2 ,3 ,4 ,5] => [4, 1, 9, 16, 25]
    
*/

function same(arr1, arr2){
    if(arr1.length !== arr2.length){
        return false;
    }
    for(let i = 0; i < arr1.length; i++){
        let correctIndex = arr2.indexOf(arr1[i] ** 2)
        if(correctIndex === -1) {
            return false;
        }
        console.log(arr2);
        arr2.splice(correctIndex, 1)
    }
    return true;
}

console.log(same([1,2,3,2], [9,1,4,4]))

// O(n^2)