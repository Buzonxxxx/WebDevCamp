/*
 * [Frequency Counter]
 * i.g. "hello" => {h:1, e:1, l:2, o:1}
 *
 *
 * loop over the string for each char
 * handle uppperCase and lowerCase char by toLowerCase()
 * filter out non-number/letter char by regexp
 *   if char not in obj, add char and count = 1 to obj
 *   if char in obj, add count to obj
 * return obj
 */

const charCount1 = (str) => {
  const result = {};
  for (let char of str) {
    char = char.toLowerCase();
    if (/[a-z0-9]/.test(char)) {
      char in result ? result[char] + 1 : result[char] = 1;
    }
  }
  return result;
};

const charCount2 = (str) => {
  const result = {};
  for (let char of str) {
    char = char.toLowerCase();
    if (/[a-z0-9]/.test(char)) {
      if (!result[char]) {
        result[char] = 1;
      } else {
        result[char] += 1;
      }
    }
  }
  return result;
};
console.log(charCount1('Hello, World!!!'));
console.log(charCount2('Hello, World!!!'));
