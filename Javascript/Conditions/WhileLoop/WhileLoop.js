/* 
1. -10~19
2. even in 10~40 
3. odd in 300~333
4. div by 5 and 3 in 5~50
*/

var num = -10;
while (num<=19){
	console.log(num);
	num++;
}

var num = 10;
while (num <= 40){
	if (num % 2 === 0){
		console.log(num);
	}
	num++;
}

var num = 300;
while (num <= 333){
	if (num % 2 === 1){
		console.log(num);
	}
	num++;
}

var num = 5;
while (num <= 50){
	if (num % 5 === 0 && num % 3 === 0){
		console.log(num)
	}
	num++;
}