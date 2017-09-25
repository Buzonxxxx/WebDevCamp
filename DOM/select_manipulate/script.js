const h1 =  document.querySelector("h1");
h1.style.color = "pink";
h1.addEventListener("click", function(){
  h1.textContent = "You clicked the h1!"
})

const body = document.querySelector("body");
let isBlue = false;

setInterval( () => {
  if(isBlue){
    body.style.background = "white";
  }
  else {
    body.style.background = "#3498db";
  }
  isBlue = !isBlue;
}, 1000);
