// hoisted: var declaration(只有宣吿, 沒有給值), function

// var declaration
console.log(animal);
var animal = 'Tapir';

// func
howl();
function howl() {
	console.log('AWOOOOOO');
}

// const/let isn't hoisted
// console.log(name);
// let name = 'Louis';

