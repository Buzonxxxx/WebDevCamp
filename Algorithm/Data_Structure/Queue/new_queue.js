// --- Directions
// Create a queue data structure.  The queue
// should be a class with methods 'add' and 'remove'.
// Adding to the queue should store an element until
// it is removed

// Implement a 'peek' method in this Queue class.
// Peek should return the last element (the next
// one to be returned) from the queue *without*
// removing it.

// FIFO, First-in-First-out

class Queue {
  constructor() {
    this.data = [];
  }

  add(record) {
    this.data.unshift(record);
  }

  remove() {
    return this.data.pop();
  }

  peek() {
    return this.data[this.data.length - 1]
  }
}

const q = new Queue();
q.add(1)
q.add(2)
q.add(3)
console.log(q)

console.log(q.remove())
console.log(q)

console.log(q.peek())