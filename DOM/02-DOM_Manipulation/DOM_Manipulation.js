// DOM Manipulation

// Change style
const h1 = document.querySelector('h1');
h1.style.color = 'blue';
h1.style.border = '5px solid pink';

//a dd/remove/toggle class
// Define this CSS file
// .some-class {
//   color: blue;
//   border: 10px soloid red;
// }

// classList
const h1 = document.querySelector('h1');
h1.classList.add('some-class');
h1.classList.remove('some-class');
h1.classList.toggle('some-class');

// textContent: change the content of tag
const h1 = document.querySelector('h1');
h1.textContent;
h1.textContent = 'xxx xxx xxx';
document.querySelector('h1').textContent = 'xxx xxx xxx';

// innerHTML: return a string of all the HTML contain element
document.querySelector('p').innerHTML;
document.body.innerHTML = '<h1>Bye!</h1>'; // need use string

// getAttribute/setAttribute: get and set attribute
const link = document.querySelector('a');
link.getAttribute('href');
link.setAttribute('href', 'www.yahoo.com');

const img = document.getElementsByTagName('img');
img.getAttribute('src');
img.setAttribute('src', 'http://xxxx.xx.xxx');

// change Google logo
const logo = document.querySelector('#hplogo');
logo.setAttribute('srcset', 'https://image.flaticon.com/icons/svg/37/37150.svg');

// change all links
const links = document.getElementsByTagName('a');

let i = 0;
while (i < links.length) {
	links[i].style.background = 'blue';
	i++;
}
