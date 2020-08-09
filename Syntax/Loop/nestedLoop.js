for (let i = 1; i <= 10; i++) {
	console.log('OUTER LOOP', i);
	for (let j = 10; j >= 0; j -= 2) {
		console.log('   INNER LOOP', j);
	}
}
