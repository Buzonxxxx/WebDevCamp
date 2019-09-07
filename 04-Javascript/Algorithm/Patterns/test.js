const countString = str => {
  const result = {};
  for (let i = 0; i < str.length; i++){
    if (!result[str[i]]) {
      result[str[i]] = 1;
    }
    else {
      result[str[i]] = result[str[i]] + 1 
    }
  }
  return result
}
console.log(countString("haha"))