// DOM = Document Object Model

//DOM Selector
document.URL
document.head
document.body
document.links

//DOM Selectors 
document.getElementById("highlight")
document.getElementsByClassName("bolded")
document.getElementsByTagName("li") // return a list of all elements
document.querySelector(".bolded") //return first match element
document.querySelectorAll("h1") //return a list of match elements

//# id
//. class

//DOM Manipulation

//Change style
var h1 = document.querySelector("h1")
h1.style.color = "blue"
h1.style.border = "5px solid pink"

//add/remove/toggle class
var h1 = document.querySelector("h1")
h1.classList.add("some-class")
h1.classList.remove("some-class");
h1.classList.toggle("some-class"); 

//text
var h1 = document.querySelector("h1")
h1.textContent
h1.textContent = "xxx xxx xxx" 

tag.innerHTML

link.getAttribute("href");
link.setAttribute("href", "www.dogs.com"); 


