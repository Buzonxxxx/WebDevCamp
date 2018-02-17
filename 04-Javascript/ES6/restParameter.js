//其餘參數(Rest parameters)的語法代表是"不確定的傳入參數值"
//其餘參數(Rest parameters)有一個限制，就是這個參數一定是函式的"最後一個"。
//你如果放在其餘的參數前，就會產生錯誤。

const nameYears = (name, ...years) => {
  console.log(`Hi ${name}, the years are ${years}`)
}
nameYears('Louis', 1990, 1999, 1965, 2016, 1987) //可以一直擴充
