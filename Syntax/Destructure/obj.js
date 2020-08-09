// [obj]
const obj = {
  firstName: 'John',
  lastName: 'Smith',
};
const { firstName, lastName } = obj;
console.log(firstName);
console.log(lastName);

const { firstName: a, lastName: b } = obj;
console.log(a);
console.log(b);

const savedField = {
  extension: 'jpg',
  name: 'repost',
  size: 14040,
};
const fileSummary = ({ extension, name, size }, { color }) => `Color is ${color}, file name is ${name}.${extension} of size ${size}`;
console.log(fileSummary(savedField, { color: 'red' }));
