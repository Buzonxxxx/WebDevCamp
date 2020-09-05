const inputs = document.querySelectorAll('input');
const labels = document.querySelectorAll('label');

for (let i = 0; i < inputs.length; i++) {
	inputs[i].addEventListener('change', () => {
		labels[i].classList.toggle('done');
	});
	labels[i].addEventListener('mouseover', () => {
		labels[i].classList.add('selected');
	});
	labels[i].addEventListener('mouseout', () => {
		labels[i].classList.remove('selected');
	});
}
