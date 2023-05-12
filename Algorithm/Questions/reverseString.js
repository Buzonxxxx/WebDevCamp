// --- Directions
// Given a string, return a new string with the reversed
// order of characters
// --- Examples
//   reverse('apple') === 'leppa'
//   reverse('hello') === 'olleh'
//   reverse('Greetings!') === '!sgniteerG'

function reverse(str) {
  // solution1
  // let reverseStr = ""
  // for (i = str.length -1; i>=0; i--){
  //     reverseStr += str[i]
  // }
  // return reverseStr

  // solution2
  // return str.split('').reverse().join('')

  // solution3
  // let reversed = ''
  // for (let char of str) {
  //     reversed = char + reversed // '', a, pa, ppa, lppa, elppa
  // }
  // return reversed

  // solution4
  return str.split('').reduce((reversed, char) => char + reversed, '')
}

console.log(reverse('hello'))

module.exports = reverse;
