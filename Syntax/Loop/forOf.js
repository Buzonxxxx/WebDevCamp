// for..of
// (o) array, string, map, set
// (x) obj

// array
const colors = ['red', 'green', 'blue'];
for (const color of colors) {
  console.log(color); // 'red', 'green', 'blue'
}

// string
const string = 'ES6';
for (const char of string) {
  console.log(char); // "E", "S", "6"
}

// map: 轉成array印出來
const map = new Map();
map.set('name', 'Louis');
map.set('country', 'Taiwan');
for (const info of map) {
  console.log(info);
}
