// Create object
// type 1
const person1 = {} // or const person1 = new Object();
person1.name = "Louis";
person1.age = 34;
person1.city = "taipei";

//type 2 (better)
const person2 = {
	name: "Louis",
	age: 34,
	city: "taipei"
};

//Retrive data from obj
console.log(person1.name)
console.log(person1["name"])

//method in object
const obj = {
	name: "Louis",
	yearOfBirth: 1983,
	isHansome: true,
	sport: ["basketball", "Cycling"],
	calculateAge() {
    this.age = new Date().getFullYear() - this.yearOfBirth
		console.log(this);
		console.log(this.isHansome)
	} 
}
obj.calculateAge()

// namespacing
const dogspace = {};
const catspace = {};
dogspace.speak = () => console.log("WOOF!")
catspace.speak = () => console.log("MEOW!")
dogspace.speak();
catspace.speak();