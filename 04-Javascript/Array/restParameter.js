//其餘參數(Rest parameters)的語法代表是"不確定的傳入參數值"
//其餘參數(Rest parameters)有一個限制，就是這個參數一定是函式的"最後一個"。
//其餘參數(Rest parameters)會幫助我們把輸入函式中的參數值變成陣列的形式
//你如果放在其餘的參數前，就會產生錯誤。

const addNumbers = (...numbers) => {
  return numbers.reduce((sum, number) => sum + number, 0)
}

console.log(addNumbers(1,2,3,4,5))