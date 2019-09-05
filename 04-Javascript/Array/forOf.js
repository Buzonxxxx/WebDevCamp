// for..of
// (o) array, string, map, set
// (x) obj

// array
const colors = ['red', 'green', 'blue']
for (let color of colors) {
	console.log(color); // 'red', 'green', 'blue'
}

// string
const string = "ES6";
for(let char of string){
  console.log(char);  // "E", "S", "6"
}

// map: 轉成array印出來
const map = new Map()
map.set('name', 'Louis')
map.set('country', 'Taiwan')
for (let info of map){
	console.log(info)
}

// 用for...in遍歷陣列，得到的是索引
var array = ['a','b','c','d','e'];  
for(let key in array) {  
    console.log(key,array[key]);  
}; 

// 用for...in遍歷物件，得到的是索引
var table = {
	a : 10,
	b : true,
	c : "jadeshu"
};  

for(let key in table) {  
	console.log(key, table[key]);  
} 