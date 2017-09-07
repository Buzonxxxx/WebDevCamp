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

//Object can hold all sort of data
const myobject = {
	age: 34,
	isHandsome: true,
	skill: ["ruby", "java", "javescript"],
	pet: {
		name: "Rusty",
		age: 2
	}
}

console.log(myobject)

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

