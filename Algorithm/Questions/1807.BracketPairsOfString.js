/**
 * 
 * 
 * convert knowledge array to key-value pair obj
 * create empty string called result
 * loop string
 * if current char is "("
 * get the word until see ")"
 * check if the word in obj, yes=> append value in result, no-> append "?" in result
 * append non brackets char in result
 */


var evaluate = function (s, knowledge) {
    let obj = {};
    for (let i of knowledge) {
      obj[i[0]] = i[1];
    }
  
    let result = "";
    for (let i = 0; i < s.length; i++) {
      if (s[i] === "(") {
        let d = "";
        i += 1;
        while (s[i] !== ")") {
          d += s[i];
          i += 1;
        } // d = name
  
        if (obj[d]) {
            result += obj[d];
        } else {
            result += "?";
        }
      } else {
        result += s[i];
      }
    }
    return result;
  };

console.log(evaluate("(name)is(age)yearsold", [["name","bob"],["age","two"]]))