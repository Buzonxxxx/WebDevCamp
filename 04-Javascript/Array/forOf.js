// for..of
// (o) array, string, map, set
// (x) obj

const colors = ['red', 'green', 'blue']
for (let color of colors) {
	console.log(color); // 'red', 'green', 'blue'
}

const string = "ES6";
for(let value of string){
  console.log(value);  // "E", "S", "6"
}

// 用for...in遍歷陣列，得到的是索引
var array = [1,2,3,4,5];  
for(let index in array) {  
    console.log(index,array[index]);  
}; 

// 用for...in遍歷物件，得到的是索引
var table = {
	a : 10,
	b : true,
	c : "jadeshu"
};  

for(let index in table) {  
	console.log(index, table[index]);  
} 