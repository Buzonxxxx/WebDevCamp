//Average Grade from couple grades

function average(array){
  let sum = 0
	array.forEach(function(grade){
  sum+=grade
  })
  return Math.round((sum/(array.length)))
}


const scores = [90, 98, 89, 100, 100, 86, 94]
console.log(average(scores))
const scores2 = [40, 65, 77, 82, 80, 54, 73, 63, 95, 49]
console.log(average(scores2))