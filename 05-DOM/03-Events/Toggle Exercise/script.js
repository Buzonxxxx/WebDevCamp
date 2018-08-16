const button = document.querySelector("button")

//type 1

// let isPurple = false
// button.addEventListener("click", () => {
//   if (isPurple){
//     document.body.style.background = "white"
//   }
//   else {
//     document.body.style.background = "purple"
//   }
//     isPurple = !isPurple
// })

//type 2
button.addEventListener("click", () => {
document.body.classList.toggle("purple")
})
