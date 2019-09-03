// Destructure

// [array]
const member = ["Mike", "Louis", "Levi", "Lucas"];
const [name1, name2, ...rest] = member;
// console.log(name1);
// console.log(name2);
// console.log(rest);

const nums = [1,2,3,4,5]
const [num1,,,num4 ] = nums 
// console.log(num1, num4)

// [obj]
const obj = {
  firstName: "John",
  lastName: "Smith"
};
const { firstName, lastName } = obj;
// console.log(firstName);
// console.log(lastName);

const { firstName: a, lastName: b } = obj;
// console.log(a);
// console.log(b);

const savedField = {
  extension: "jpg",
  name: "repost",
  size: 14040
};
const fileSummary = ({ extension, name, size }, { color }) =>
  `Color is ${color}, file name is ${name}.${extension} of size ${size}`;
// console.log(fileSummary(savedField, { color: "red" }));

// [obj of array]
const compaines = [
  { name: "Google", location: "Mountain View" },
  { name: "Facebook", location: "Menlo Park" },
  { name: "Uber", location: "San Francisco" }
];
const [{ location }] = compaines
// console.log(location)

const [{ location: googleLocation },,{ location: uberLocation }] = compaines;
// console.log(googleLocation);
// console.log(uberLocation)

// [array of obj]
const Google = {
  locations: ["Mountain View", "New York", "London"]
};
const { locations: [location1] } = Google;
// console.log(location1);

// [array to object]
const points = [[4, 5], [10, 1], [0, 40]];
const newPoints = points.map(([x, y]) => {
  return { x, y };
});
// console.log(newPoints);

// function
const calcAgeRetirement = year => {
  const age = new Date().getFullYear() - year;
  return [age, 65 - age];
};

const [yourAge, yearsToRetirement] = calcAgeRetirement(1983);
// console.log(`Your current age is: ${yourAge}, the years to retirement is: ${yearsToRetirement}`);
