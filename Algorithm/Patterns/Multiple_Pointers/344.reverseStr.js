// Write a function that reverses a string. The input string is given as an array of characters char[].
// Do not allocate extra space for another array,
// you must do this by modifying the input array in-place with O(1) extra memory.


const reverseString = (s) => {
  if (s.length === 0) return s;
  let str = '';
  // transform input array to string
  for (let i = 0; i < s.length; i++) {
    str += s[i];
  }
  let left = 0;
  let right = s.length - 1;
  while (right >= 0) {
    s[left] = str.charAt(right);
    left += 1;
    right -= 1;
  }
  return s;
};


const s2 = ['h', 'e', 'l', 'l', 'o'];
console.log(reverseString(s2));
