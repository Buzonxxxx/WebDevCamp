// 在 JavaScript 中，沒有內建的「Queue」（佇列）和「Stack」（堆疊）資料結構。然而，
// 您可以使用 JavaScript 的內建數組（Array）來實現這些資料結構

var MyQueue = function() {
  this.first = []
  this.second = []
};

MyQueue.prototype.push = function(x) {
  this.first.push(x)
};

MyQueue.prototype.pop = function() {
  if (this.second.length) {
    return this.second.pop();
  }
  while (this.first.length) {
    this.second.push(this.first.pop());
  }
  return this.second.pop();
};

/**
* @return {number}
*/
MyQueue.prototype.peek = function() {
  if (this.second.length) return this.second.slice(-1);
  return this.first[0];
};

/**
* @return {boolean}
*/
MyQueue.prototype.empty = function() {
  return this.first.length === 0 && this.second.length === 0
};

var obj = new MyQueue()
obj.push(1)
obj.push(2)
obj.push(3)
console.log(obj) // MyQueue { first: [ 1, 2, 3 ], second: [] }

console.log(obj.pop())
console.log(obj)

console.log(obj.peek())
console.log(obj)

console.log(obj.empty())
console.log(obj)
