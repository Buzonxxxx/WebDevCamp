//for...of
for (const cur of boxesArr6){
  if (cur.className.includes('blue')) {
    continue
  }
  cur.textContent = 'I changed to blue!'
}

// for..of
for (const i of array){
	console.log(i)
}