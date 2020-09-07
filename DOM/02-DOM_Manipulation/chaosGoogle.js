const myImg = document.createElement('img');
myImg.src =
	'https://images.unsplash.com/photo-1599154744333-72bdc3e1bcf8?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2734&q=80';

myImg.style.width = '200px';
document.body.append(myImg);
myImg.style.transition = 'all 2s';

const sheet = new CSSStyleSheet();
sheet.replaceSync('* {transition all 2s}');
document.adoptedStyleSheets = [ sheet ];

const allEls = document.getElementById('viewport').children;

setInterval(() => {
	for (let el of allEls) {
		const rotation = Math.floor(Math.random() * 360);
		const x = Math.floor(document.body.clientWidth * Math.random());
		const y = Math.floor(document.body.clientHeight * Math.random());
		el.style.transform = `translate(${x}px,${y}px) rotate${rotation}deg`;
	}
}, 2000);
