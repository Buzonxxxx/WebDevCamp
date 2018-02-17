// 展開運算子是"把一個陣列展開(expand)成個別數值"的速寫語法

const addFourAges = (a, b, c, d) => a + b + c + d
const ages = [18, 30, 12, 21]
console.log(addFourAges(...ages))

const familySmith = ['John', 'Jane', 'Mark']
const familyMiller = ['Mary', 'Bob', "Ann"]
const bigFamily = [...familySmith, 'Louis', ...familySmith]
console.log(bigFamily)