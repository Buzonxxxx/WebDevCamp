const input = document.querySelectorAll("input")
const label = document.querySelectorAll("label")

for(let i = 0; i<input.length; i++) {
  input[i].addEventListener("change", () => {
      label[i].classList.toggle("done")
  })
  label[i].addEventListener("mouseover", () => {
    label[i].classList.add("selected")
  })
  label[i].addEventListener("mouseout", () => {
    label[i].classList.remove("selected")
  })
}