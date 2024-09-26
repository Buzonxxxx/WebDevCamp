// 泛型 Generics
class Queue<T> {
  private data: T[] = [];

  add(item: T) {
    this.data.push(item);
  }

  remove() {
    this.data.shift();
  }
}

const nameQueue = new Queue<string>();
nameQueue.add("John");
nameQueue.add("Louis");

const numberQueue = new Queue<number>();
numberQueue.add(1);