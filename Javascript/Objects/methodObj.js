//method in object
var obj = {
	name: "Louis",
	age: 34,
	isHansome: true,
	sport: ["basketball", "Cycling"],
	add: function(x,y){
		return x+y;
	}
}
console.log(obj.add(10,20));

//namespacing
var dogspace = {};
var catspace = {};
dogspace.speak = function(){
	console.log("WOOF!");
}
catspace.speak = function(){
	console.log("MEOW!");
}
dogspace.speak();
catspace.speak();