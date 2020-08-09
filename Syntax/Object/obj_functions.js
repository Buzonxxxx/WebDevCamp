const obj = {
	a: 'one',
	b: 'two',
	c: 'three'
};

// put keys, values in array
console.log(Object.keys(obj));
console.log(Object.values(obj));

// count object size
console.log(Object.keys(obj).length);
console.log(Object.values(obj).length);

// entries: put key/value pair in array
console.log(Object.entries(obj));
console.log(Object.prototype.hasOwnProperty.call(obj, 'a'));

const entries = Object.entries(obj);
for (const entry of entries) {
	console.log(`key: ${entry[0]}, value: ${entry[1]}`);
}

// Object.assign(target, ...sources);
// 淺拷貝
const o1 = { a: 1 };
const o2 = { b: 2 };
const o3 = { c: 3 };

const merge = Object.assign(o1, o2, o3);
console.log(merge); // {a: 1, b: 2, c: 3}
console.log(o1); // {a: 1, b: 2, c: 3}
