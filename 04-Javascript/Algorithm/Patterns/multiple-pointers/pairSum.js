// find pair's sum is equal to 8

// [1, 2, 3, 9] sum = 8
// [1 ,2, 4, 4] sum = 8
//  i         j

function pairSum(arr){
  var i = 0, j = arr.length - 1;
  while(i < j) {
    let sum = arr[i] + arr[j]
    if(sum === 8) return [arr[i], arr[j]];
    else if(sum > 8) j--;
    else i++;
  }
  return [arr[i], arr[j]];
}

console.log(pairSum([1 ,2, 4, 4]))