// method in object
const tasks = {
	task: [
		{ text: 'Grocery shopping', completed: true },
		{ text: 'Clean yard', completed: false },
		{ text: 'Film course', completed: false }
	],
	getTasksToDo() {
		return this.task.filter((task) => task.completed === false);
	}
};

console.log(tasks.getTasksToDo());

// namespacing
const dogspace = {};
const catspace = {};
dogspace.speak = () => console.log('WOOF!');
catspace.speak = () => console.log('MEOW!');
dogspace.speak();
catspace.speak();
