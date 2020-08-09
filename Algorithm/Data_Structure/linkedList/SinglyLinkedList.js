/*
 * - Singly Linked Lists are an excellent alternative to arrays
 *   when insertion and deletion at the beginning are frequently required
 * - Arrays contain a built in index whereas Linked Lists do not
 * - The idea of a list data structure that consists of nodes is the foundation
 *   for other data structures like Stacks and Queues
 *
 * 只知道前(head), 後(tail)是誰, 長度(length), 不知道現在在哪裡
 *
 * [Lists]
 * - Do not have indexes!
 * - Connected via nodes with a next pointer
 * - Random access is not allowed
 *
 * [Arrays]
 * - Indexed in order!
 * - Insertion and deletion can be expensive
 * - Can quickly be accessed at a specific index
 *
 */

class Node {
  constructor(val) {
    this.val = val;
    this.next = null;
  }
}

class SinglyLinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
    this.length = 0;
  }

  push(val) {
    const newNode = new Node(val);
    if (!this.head) {
      this.head = newNode;
      this.tail = this.head;
    } else {
      // add newNode to next of tail
      this.tail.next = newNode;
      // update tail
      this.tail = newNode;
    }
    // update length
    this.length += 1;
    return this;
  }

  pop() {
    if (!this.head) return undefined;
    let current = this.head;
    let newTail = current;
    // find new tail (one ahead of tail)
    while (current.next) {
      newTail = current;
      current = current.next;
    }
    // set new tail
    this.tail = newTail;
    this.tail.next = null;
    this.length -= 1;
    if (this.length === 0) {
      this.head = null;
      this.tail = null;
    }
    return current;
  }

  shift() {
    if (!this.head) return undefined;
    const currentHead = this.head;
    this.head = currentHead.next;
    this.length -= 1;
    if (this.length === 0) {
      this.tail = null;
    }
    return currentHead;
  }

  unshift(val) {
    const newNode = new Node(val);
    if (!this.head) {
      this.head = newNode;
      this.tail = this.head;
    } else {
      newNode.next = this.head;
      this.head = newNode;
    }
    this.length += 1;
    return this;
  }

  get(index) {
    if (index < 0 || index >= this.length) return null;
    let counter = 0;
    let current = this.head;
    while (counter !== index) {
      current = current.next;
      counter += 1;
    }
    return current;
  }

  set(index, val) {
    const foundNode = this.get(index);
    if (foundNode) {
      foundNode.val = val;
      return true;
    }
    return false;
  }

  insert(index, val) {
    if (index < 0 || index > this.length) return false;
    if (index === this.length) return !!this.push(val);
    if (index === 0) return !!this.unshift(val);

    const newNode = new Node(val);
    const prev = this.get(index - 1);
    const temp = prev.next;
    prev.next = newNode;
    newNode.next = temp;
    this.length += 1;
    return true;
  }

  remove(index) {
    if (index < 0 || index >= this.length) return undefined;
    if (index === 0) return this.shift();
    if (index === this.length - 1) return this.pop();

    const previousNode = this.get(index - 1);
    const removed = previousNode.next;
    previousNode.next = removed.next;
    this.length -= 1;
    return removed;
  }

  // possible interveiw question
  reverse() {
    // swap head and tail
    let node = this.head;
    this.head = this.tail;
    this.tail = node;

    let next;
    let prev = null;
    // 13 -> 27 -> 32 -> 71
    // 13 <- 27
    // 13 <- 27 <- 32
    // 13 <- 27 <- 32 <- 71
    for (let i = 0; i < this.length; i += 1) {
      // node: 13
      next = node.next; // next: 27
      node.next = prev; // node.next: null
      prev = node; // update prev to node
      node = next; // update node to next
    }
    return this;
  }

  print() {
    const arr = [];
    let current = this.head;
    while (current) {
      arr.push(current.val);
      current = current.next;
    }
    console.log(arr);
  }
}


const list = new SinglyLinkedList();
list.push('HELLO');
list.push('GOODBYE');
list.reverse();
list.print();
