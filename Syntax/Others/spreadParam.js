// in array
const f1 = [ 'Jane', 'Olive' ];
const f2 = [ 'Ken, John' ];
const f3 = [ 'Louis', 'Lucas', 'Levi' ];
bigFamily = [ ...f1, 'Louis', ...f2, ...f3 ];
console.log(bigFamily);
// split string
console.log([ ...'Louis' ]);

// in function call
const max = (array) => Math.max(...array);
const min = (array) => Math.min(...array);
console.log(max([ -5, 100, 23, 56, 10 ]));
console.log(min([ -5, 100, 23, 56, 10 ]));

// in string
const str = 'GOAT';
console.log(...str); // = console.log('G', 'O', 'A', 'T');

// in object literal
const canine = { family: 'Caninae', furry: true, legs: 4 };
const feline = { legs: 4, family: 'Felidae' };

const housecat = { ...feline, isGrumpy: true, personality: 'unpredicable' };
console.log(housecat);

const catDog = { ...canine, ...feline }; // overwrite same key's value
console.log(catDog);

const catDogClone = { ...catDog };
console.log(catDogClone);
