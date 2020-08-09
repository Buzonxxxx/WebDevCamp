/**
 *
 *
 * use array: push(), pop() or unshift(), shift()
 * 後進先出
 *
 */

class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

class Stack {
  constructor() {
    this.first = null;
    this.last = null;
    this.size = 0;
  }

  // 從頭push進去
  push(val) {
    const newNode = new Node(val);
    if (!this.first) {
      this.first = newNode;
      this.last = newNode;
    } else {
      const temp = this.first;
      this.first = newNode;
      this.first.next = temp;
    }
    return ++this.size;
  }

  // 從頭pop
  pop() {
    if (!this.first) return null;
    const popedNode = this.first;
    if (this.first == this.last) {
      this.first = null;
      this.last = null;
    }
    this.first = this.first.next;
    this.size--;
    return popedNode.value;
  }
}

const stack = new Stack();
stack.push('hello');
stack.push('world');
//  console.log(stack)
console.log(stack);
