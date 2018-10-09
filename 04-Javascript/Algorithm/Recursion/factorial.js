// [Recursion]
function factorial1(num){
  if(num === 1) return 1
  return num * factorial1(num-1)
}
console.log(factorial1(5))

/**************************************************** */

// [Original]
function factorial2(num){
  let total = 1;
  for(i = num; i > 0; i--){
    total *= i;
  }
  return total;
}
console.log(factorial2(5))