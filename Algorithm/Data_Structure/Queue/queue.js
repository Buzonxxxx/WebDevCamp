/**
 *
 *
 * 先進先出 FIFO
 *
 */

class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

class Queue {
  constructor() {
    this.first = null;
    this.last = null;
    this.size = 0;
  }

  // 從後面塞
  enqueue(val) {
    const newNode = new Node(val);
    if (!this.first) {
      this.first = newNode;
      this.last = newNode;
    } else {
      this.last.next = newNode;
      this.last = newNode;
    }
    return ++this.size;
  }

  dequeue() {
    if (!this.first) return null;
    const poppedNode = this.first;
    if (this.first === this.last) return null;
    this.first = this.first.next;
    this.size--;
    return poppedNode.value;
  }
}

const queue = new Queue();
queue.enqueue('hello');
queue.enqueue('world');
queue.dequeue();
console.log(queue);
