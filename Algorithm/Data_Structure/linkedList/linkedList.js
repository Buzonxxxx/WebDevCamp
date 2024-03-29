// --- Directions
// Implement classes Node and Linked Lists
// See 'directions' document

class Node {
  constructor(data, next = null) {
    this.data = data
    this.next = next
  }
}

class LinkedList {
  constructor() {
    this.head = null
  }

  insertFirst() {
    this.head = new Node(data, this.head) // 原本的head變成下一個node, default是null
  }

  size() {
    let counter = 0
    let node = this.head

    while(node) {
      counter++
      node = node.next
    }
    return counter
  }

  getfirst() {
    return this.head
  }

  getLast() {
    if(!this.head) {
      return null
    }
    let node = this.head
    while(node) {
      if(!node.next) {
        return node
      }
      node = node.next
    }
  }

  clear() {
    this.head = null
  }

  removeFirst() {
    if(!this.head) {
      return
    }
    this.head = this.head.next
  }

  removeLast() {
    if(!this.head) {
      return
    }
    if(!this.head.next){
      this.head = null
      return
    }
    let previous = this.head
    let node = this.head.next
    while(node.next){
      previous = node
      node = node.next
    }
    previous.next = null
  }

  insertLast() {
    const last = this.getLast()
    if(last) {
      last.next = new Node(data)
    } else {
      this.head = new Node(data)
    }
  }

  getAt(index) {
    let counter = 0
    let node = this.head
    while (node) {
      if (counter === index) {
        return node
      }
      node = node.next
      counter++
    }
    return null
  }

  removeAt(index) {
    if (!this.head) {
      return
    }
    if (index === 0) {
      this.head = this.head.next
      return
    }

    const previous = this.getAt(index - 1)
    if (!previous || !previous.next) {
      return
    }
      previous.next = previous.next.next
  }

  insertAt(data, index) {
    if (!this.head) {
      this.head = new Node(data)
      return
    }

    if (index === 0) {
      this.head = new Node(data, this.head)
      return
    }

    const previous = this.getAt(index - 1) || this.getLast()
    previous.next = new Node(data, previous.next)

  }
}

module.exports = { Node, LinkedList };