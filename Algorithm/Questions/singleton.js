// Singleton 的定義是「保證一個類別僅有一個實例，並提供一個存取它的全域存取點

function Singleton() { // constructor function 建構式函式
  if (typeof Singleton.cache === 'object') {
    return Singleton.cache;
  }

  this.name = "xxx";
  Singleton.cache = this;
}

var obj1 = new Singleton();
var obj2 = new Singleton();
console.log(obj1 === obj2); // true