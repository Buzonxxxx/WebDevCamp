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
for(let key in array) {  
  console.log(key,array[key]);  
}; 

// find value "jadeshu" in table object, return its key
for(let key in table) {  
	if(table[key] == "jadeshu"){
    console.log(key)
  }
} 