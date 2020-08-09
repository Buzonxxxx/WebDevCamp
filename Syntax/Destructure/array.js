// [array]

// 1
const member = ['Mike', 'Louis', 'Levi', 'Lucas'];
const [name1, name2, ...rest] = member;
console.log(name1);
console.log(name2);
console.log(rest);

// 2
const nums = [1, 2, 3, 4, 5];
const [num1,,, num4] = nums;
console.log(num1, num4);

// 3
const calcAgeRetirement = (year) => {
  const age = new Date().getFullYear() - year;
  return [age, 65 - age];
};
const [yourAge, yearsToRetirement] = calcAgeRetirement(1983);
console.log(`Your current age is: ${yourAge}, the years to retirement is: ${yearsToRetirement}`);
