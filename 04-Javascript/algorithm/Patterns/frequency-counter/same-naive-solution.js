/*
Q. accept 2 arrays, check if all one array's elements' square are in another array
Solution:
    1. check if array length are the same
        true: continue
        false: return false
    2. loop over arr1's element's square 
    3. check if in another array
        - true: remove the matched element and keep checking next array1's element
        - false: return false


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
        arr2.splice(correctIndex,1)
    }
    return true;
}

if(same([1,2,3,2], [9,1,4,4])){
    console.log('Yes')
} else {
    console.log('No')
}

