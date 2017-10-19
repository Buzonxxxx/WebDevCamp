//其餘參數(Rest parameters)的語法代表是"不確定的傳入參數值"
//其餘參數(Rest parameters)有一個限制，就是這個參數一定是函式的"最後一個"。
//你如果放在其餘的參數前，就會產生錯誤。

//ES6

function isFullAge6(limit, ...years) {
  // console.log(years)
  // years.forEach(cur => console.log((2016 - cur) >= 18 ))
  for (const cur of years) {
    console.log((2016 - cur) >=limit)
  }
}

isFullAge6(16, 1990, 1999, 1965, 2016, 1987) //可以一直擴充
