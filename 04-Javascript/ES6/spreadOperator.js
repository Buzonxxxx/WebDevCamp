// 展開運算子是"把一個陣列展開(expand)成個別數值"的速寫語法

const familySmith = ['John', 'Jane', 'Mark']
const familyMiller = ['Mary', 'Bob', "Ann"]
const bigFamily = [...familySmith, 'Louis', ...familyMiller]
console.log(bigFamily)