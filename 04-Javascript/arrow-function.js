//arrow function does not bind this

const user = {
  name: "Louis",
  guestList: ["Louis", "Jane", "Mike"],
  sayHiAlt() {
    console.log(`Hi. I'm ${this.name}`);
    this.guestList.forEach(guest => {
      console.log(guest);
    });
  }
};
// user.sayHiAlt()

const tasks = {
  task: [
    {
      text: "Grocery shopping",
      completed: true
    },
    {
      text: "Clean yard",
      completed: false
    },
    {
      text: "Film course",
      completed: false
    }
  ],
  getTasksToDo() {
    return this.task.filter(task => task.completed == false);
  }
};

console.log(tasks.getTasksToDo());
