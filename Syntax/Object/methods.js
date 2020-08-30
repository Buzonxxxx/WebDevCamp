const math = {
	add: (a, b) => a + b,
	multiply(x, y) {
		return x * y;
	}
};

console.log(math.add(1, 1));
console.log(math.multiply(2, 2));

// this
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
