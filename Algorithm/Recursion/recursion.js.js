/*
 * Recursion: A function call itself
 * - Base case: 遞迴停止的condition
 * - Differnet input: 每次call 同個function, input不同
 * - Use call stack
 */

const countDown = num => {
  // base case
  if(num <= 0) {
    console.log("All done!");
    return;
  }
  console.log(num);
  // different input
  num--;
  countDown(num);
}
countDown(3)

const sumRange = num => {
  if(num === 1) {
    return 1; 
  }
  num =  num + sumRange(num - 1);
  return num;
}
console.log(sumRange(4))

const factorial = num => {
  if(num === 1) {
    return 1;
  }
  result = num * factorial(num - 1);
  return result;
}
console.log(factorial(5))