var action = prompt("What would you like to do?");
var TodoList = [];

while (action !== "quit"){
	if (action === "new"){
		addTodo();
	}
	else if (action === "list"){
		lisTodos();
	}
	else if (action === "delete"){
		deleteTodo();
	}
	else {
		wrongInput();
	}
	action = prompt("What would you like to do?");
}
	console.log("OK, you quite the app.")
	
function lisTodos(){
	console.log("**********");
	TodoList.forEach(function(todo, i){
	console.log(i + ": " + todo);
	})
	console.log("**********");
}

function deleteTodo(){
	var deleteIndex = prompt("Enter index of todo to delete.")
	TodoList.splice(deleteIndex,1);
	console.log("Todo Removed");
	console.log(TodoList);
}


function addTodo(){
	TodoList.push(prompt("Enter new todo."));
	console.log("Todo Added");
}

function wrongInput(){
	console.log("you input wrong option");
}
