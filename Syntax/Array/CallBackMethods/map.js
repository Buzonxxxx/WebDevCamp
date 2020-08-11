// The map method creates a new array with the results of calling a provided function on every element
const cars = [ { model: 'Buick', price: 'cheap' }, { model: 'Carmaro', price: 'expensive' } ];
const prices = cars.map((car) => car.price);
console.log(prices);

console.log('===========');

const sqrt = (array) => array.map((el) => Math.sqrt(el));
console.log(sqrt([ 9, 16 ]));

console.log('===========');

// return objs in array
const numbers = [ 20, 21, 22, 23, 24, 25 ];
const numDetail = numbers.map((num) => {
	return {
		value: num,
		isEven: num % 2 === 0
	};
});
console.log(numDetail);

console.log('===========');

const words = [ 'asap', 'byob', 'rsvp', 'diy' ];
const result = words.map((word) => {
	return word.toUpperCase().split('').join('.');
});
console.log(result);
