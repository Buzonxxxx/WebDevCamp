// Create object
// type 1
const person1 = {}
person1.name = "Louis";
person1.age = 34;
person1.city = "taipei";

//type 2 (better)
const person2 = {
	name: "Louis",
	age: 34,
	city: "taipei"
};

//type 3
const person3 = new Object();
person3.name = "Louis";
person3.age = 34;
person3.city = "taipei";

//Retrive data from obj
console.log(person1.name)
console.log(person3["name"])
const xxx = "city"
console.log(person3[xxx])

//Nested array and objet
const someObject = {
	friends: [
	{name: "Malfoy"},
	{name: "Crabbe"},
	{name: "Goyle"},
	],
	color: "baby blue",
	isEvil: true
};

//retrive "Malfoy"
console.log(someObject.friends[0].name);

//method in object
const obj = {
	name: "Louis",
	yearOfBirth: 1983,
	isHansome: true,
	sport: ["basketball", "Cycling"],
	calculateAge: function() {
    this.age = 2017 - this.yearOfBirth
		 console.log(this);
		 console.log(this.isHansome)
		} 
		
}
obj.calculateAge()
console.log(obj)

//namespacing
const dogspace = {};
const catspace = {};
dogspace.speak = () => console.log("WOOF!")
catspace.speak = () => console.log("MEOW!")
dogspace.speak();
catspace.speak();