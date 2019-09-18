/*
 * 1.
 * Write a function called sumZero which accepts a sorted array of integers. 
 * The function should find the first pair where the sum is 0. 
 * Return an array that includes both values that sum to zero or undefined if a pair does not exist
 *
 * i.g.
 * [-2,-1,0,1,2,3,4,5] => return [-2,2]
 * [1,2,3,4,5] => return undefined
 */

 const twoPointer = arr => {
    let left = 0, right = arr.length -1;
    while(arr[left] < arr[right]){
        let sum = arr[left] + arr[right];
        if(sum === 0) return [arr[left], arr[right]];
        else if (sum > 0) right--;
        else left++;
    }
}
console.log(twoPointer([-2,-1,0,1,2,3,4,5])) //[-2,2]
// O(n)

