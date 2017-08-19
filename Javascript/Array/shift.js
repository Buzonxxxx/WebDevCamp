// shift/unshift
// xxx.unshift("xxx") 
// -- add to the in front of an array
// xxx.shift()
// -- remove the first item of an array

function printReverse(array){
  //forEach + unshift()
    var reverse = [];
    array.forEach(function(x){
      reverse.unshift(x);
    });
    reverse.forEach(function(num){
      console.log(num);
    });
  }