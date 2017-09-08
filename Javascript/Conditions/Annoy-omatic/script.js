//ask user "Are we there yet"
//Keep asking again and again until they enter "yes" OR "yeah"
//Then, alert "Yay, we finally made it!"


const ans = prompt("Are we there yet?")
while (ans !== "yes" && ans !== "yeah"){
	ans = prompt("Are we there yet?")
}

alert("Yay, we finally made it!")