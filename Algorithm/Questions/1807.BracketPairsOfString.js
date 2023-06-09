// Input: s = "(name)is(age)yearsold", knowledge = [["name","bob"],["age","two"]]
// Output: "bobistwoyearsold"
// Explanation:
// The key "name" has a value of "bob", so replace "(name)" with "bob".
// The key "age" has a value of "two", so replace "(age)" with "two".

// verify inputs
// convert knowledge array to a key-value pair object
// init a empty result string
// loop s
// if char === '(', save the next char to temp string until the next char is ')'
// check if temp string in knowledge object
//   if it's in the knowledge obj => add its value to the result string
//   else add '?' to the result string
// else add char to the result string

var evaluate = function(s, knowledge) {
  if(s.length === 0) return false

  const table = {}
  for (let item of knowledge) {
      table[item[0]] = item[1]
  }

  let result = ''
  for (let i = 0; i < s.length; i++) {
      if (s[i] === '(') {
          let temp = ''
          i++
          while(s[i] !== ')') {
              temp += s[i]
              i++
          }
          if (table[temp]) {
              result += table[temp]
          } else {
              result += '?'
          }
      } else {
          result += s[i]
      }
  }
  
  return result

};

console.log(evaluate("(name)is(age)yearsold", [["name","bob"],["age","two"]]))
// bobistwoyearsold