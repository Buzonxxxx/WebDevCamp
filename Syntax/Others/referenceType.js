// array and object are reference type
const arr = [ 1, 2, 3, 4, 5 ];
const newArr = arr;
newArr[arr.length] = 6;
console.log(arr, newArr);

const obj = { name: 'Louis' };
const newObj = obj;
newObj.age = 35;
console.log(newObj, obj);

// primitives(number, boolean, string...) are value type
let name = 'Louis';
let newName = name;
newName = 'Anney';
console.log(newName, name);

// [] != []
// compare array? [1,2,3] == [1,2,3]? => use loop
console.log([] == []);
