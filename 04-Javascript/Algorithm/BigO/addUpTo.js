const { performance } = require('perf_hooks');

const addUpTo1 = n => {
  let total = 0;
  for (let i = 1; i <= n; i++) {
    total += i;
  }
  return total;
}

const addUpTo2 = n => n * (n + 1) / 2;

var t1 = performance.now();
addUpTo1(1000000000);
var t2 = performance.now();
console.log(`Slower way's time Elapsed: ${(t2 - t1) / 1000} seconds.`)
//  time complexity: O(n)

var t1 = performance.now();
addUpTo2(1000000000);
var t2 = performance.now();
console.log(`Faster way's time Elapsed: ${(t2 - t1) / 1000} seconds.`)
//  time complexity: O(1)