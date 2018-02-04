/* 
1. -10~19
2. even in 10~40 
3. odd in 300~333
4. div by 5 and 3 in 5~50
*/

let num = -10;
while (num <= 19){
	console.log(num);
	num++;
}

let num1 = 10;
while (num1 <= 40){
	if (num1 % 2 === 0){
		console.log(num1);
	}
	num1++;
}

let num2 = 300;
while (num2 <= 333){
	if (num2 % 2 === 1){
		console.log(num2);
	}
	num2++;
}

let num3 = 5;
while (num3 <= 50){
	if (num3 % 5 === 0 && num3 % 3 === 0){
		console.log(num3)
	}
	num3++;
}