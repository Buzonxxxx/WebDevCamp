/* 
1. -10~19
2. even in 10~40 
3. odd in 300~333
4. div by 5 and 3 in 5~50
*/

for (var i = -10; i <= 19; i++){
	console.log(i);
}

for (var i = 10; i <= 40; i+=2){
	console.log(i);
}

for (var i = 300; i <= 333; i++){
	if (i%2 !== 0){
	console.log(i);
	}
}

for (var i = 5; i <= 50; i++){
	if (i%5 === 0 && i%3 ===0){
	console.log(i);
	}
}