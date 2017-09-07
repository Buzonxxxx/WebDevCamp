//method in object
const obj = {
	name: "Louis",
	age: 34,
	isHansome: true,
	sport: ["basketball", "Cycling"],
	add: (x,y) => x + y
	
}
console.log(obj.add(10,20));

//namespacing
const dogspace = {};
const catspace = {};
dogspace.speak = () => console.log("WOOF!")
catspace.speak = () => console.log("MEOW!")

dogspace.speak();
catspace.speak();