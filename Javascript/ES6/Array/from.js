const bar = [1,2,3,4,5]
const barNew = Array.from(bar)
console.log(barNew)
for (const value of barNew){
  console.log(value)
}
/* real case
const boxes = document.querySelectorAll('.box')
const boxesArray = Array.from(boxes)
//forEach
boxesArray.forEach(cur => cur.style.backgroundColor = 'blue')
//for of
for (const cur of boxesArray){
  cur.style.backgroundColor = 'blue'
}
*/

