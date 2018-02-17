// 1. 宣告方式

//Original function declaration
const add = function (a, b){
  return a + b
}

// arrow function: 把return寫在同一行
const add = (a, b) => a + b

// arrow function: return太長就分行寫
const add = (a, b) => {
  return a + b
}

// 2. 不同argument時

// single argument => 可以省略括號
const add = a => a * 2
// multiple argument => 不可以省略括號
const add = (a, b) => a + b
// no argument => 不可以省略括號
const XD = () => console.log(3 + 5)


// 3. Funtion in Function

// Original function
numbers.map(function(number){
  return number * 2
})
// Arrow function
numbers.map(number => number * 2 )

