class Comment {
  constructor(content, children) {
    this.content = content;
    this.children = children;
  }

  * [Symbol.iterator]() {
    yield this.content;
    for (const child of this.children) {
      yield* child;
    }
  }
}

const children = [
  new Comment('good comment', []),
  new Comment('bad comment', []),
  new Comment('meh', []),
];

const tree = new Comment('Great post!', children);
console.log(tree);

const values = [];
for (const value of tree) {
  values.push(value);
}

console.log(values);
