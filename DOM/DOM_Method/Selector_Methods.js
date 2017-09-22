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
const h1 = document.querySelector("h1")
h1.style.color = "blue"
h1.style.border = "5px solid pink"

//add/remove/toggle class
const h1 = document.querySelector("h1")
h1.classList.add("some-class")
h1.classList.remove("some-class");
h1.classList.toggle("some-class"); 

//text
const h1 = document.querySelector("h1")
h1.textContent
h1.textContent = "xxx xxx xxx" 
document.querySelector("h1").textContent = "xxx xxx xxx"

//return a string of all the HTML in element
const p = document.querySelector("p")
p.textContent
p.innerHTML
const ul = document.querySelector("ul")
ul.innerHTML

//get and set attribute
const link = document.querySelector("a")
link.getAttribute("href");
link.setAttribute("href", "www.yahoo.com")


