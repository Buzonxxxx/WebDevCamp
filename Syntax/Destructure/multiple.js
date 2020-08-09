// [obj in array]
const compaines = [
  { name: 'Google', location: 'Mountain View' },
  { name: 'Facebook', location: 'Menlo Park' },
  { name: 'Uber', location: 'San Francisco' },
];
const [{ location }] = compaines;
console.log(location);

const [, { location: googleLocation }, { location: uberLocation }] = compaines;
console.log(googleLocation);
console.log(uberLocation);

// [array in obj]
const Bike = {
  brands: ['BMC', 'Cervelo', 'Canyon'],
};
const { brands: [, brand] } = Bike;
console.log(brand);

// [array to object]
const points = [[4, 5], [10, 1], [0, 40]];
const newPoints = points.map(([x, y]) => ({ x, y }));
console.log(newPoints);
