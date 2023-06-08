// --- Directions
// Print out the n-th entry in the fibonacci series. The fibonacci series is an ordering of numbers where
// each number is the sum of the preceeding two.

// For example, the sequence
//  [0, 1, 1, 2, 3, 5, 8, 13, 21, 34]
// forms the first ten entries of the fibonacci series.
// Example:
//   fib(4) === 3


const fib = (n) => {
  const result = [0, 1]
  for (let i = 2; i <= n; i++) {
    const a = result[i - 1]
    const b = result[i - 2]
    result.push(a + b)
  }
  return result[n]
}

console.log(fib(4))
//  [0, 1, 1, 2, 3, 5, 8, 13, 21, 34]

const fib2 = (n) => {
  if (n < 2) {
    return n
  }

  return fib2(n - 1) + fib2(n - 2)
  // fib(4) = fib(3) + fib(2) = fib(2) + fib(1) + fib(2) = fib(1)+fib(0) + 1 + fib(1)+fib(0) = 1+0+1+1+0  
}

console.log(fib2(4))
