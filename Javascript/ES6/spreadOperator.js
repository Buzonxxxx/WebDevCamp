// 展開運算子是"把一個陣列展開(expand)成個別數值"的速寫語法

function addFourAges (a, b, c, d) {
  return a+b+c+d
}
// var sum1 = addFourAges(18, 30, 12, 21)
// console.log(sum1)

var ages = [18, 30, 12, 21]
//ES5
// var sum2 = addFourAges.apply(null, ages)
// console.log(sum2)

//ES6
const sum3 = addFourAges(...ages)
console.log(sum3)

const familySmith = ['John', 'Jane', 'Mark']
const familyMiller = ['Mary', 'Bob', "Ann"]
const bigFamily = [...familySmith, 'Louis', ...familySmith]
console.log(bigFamily)

//real case, collect node lists
// const h = document.querySelector('h1')
// const boxes = document.querySelectorAll('.box')
// const all = [h, ...boxes]
// Array.from(all).forEach(cur => cur.style.color = 'purple')
