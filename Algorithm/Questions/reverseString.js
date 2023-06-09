// --- Directions
// Given a string, return a new string with the reversed
// order of characters
// --- Examples
//   reverse('apple') === 'leppa'
//   reverse('hello') === 'olleh'
//   reverse('Greetings!') === '!sgniteerG'

// verify str
// init a empty resilt string
// loop string and concat to the result string

function reverse(str) {
  if (str.length === 0) return false
  let result = ''
  for (let char of str) {
    result = char + result
  }
  return result
}

console.log(reverse('hello'))
