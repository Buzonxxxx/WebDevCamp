const guessNumber = Number(prompt("Guess a number"));
if (guessNumber > 7){
	alert("Too high. Try again");
}
else if (guessNumber < 7){
	alert("Too low. Try again");
}
else
	alert("Yoe guessed it!");