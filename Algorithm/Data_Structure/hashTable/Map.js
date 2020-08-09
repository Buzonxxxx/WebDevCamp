
const question = new Map();
// console.log(question.size)
question.set('question', 'What is the official name of the latest major Javascript version?');
question.set(1, 'ES5');
question.set(2, 'ES6');
question.set(3, 'ES2015');
question.set(4, 'ES7');
question.set('correct', 3);
question.set(true, 'Correct answer :D');
question.set(false, 'Wrong, please try again!');
// console.log(question.size)
// => 8
// console.log(question.get(1))
// => ES5

// if(question.has(4)) question.delete(4)

// console.log(question.keys())
// 轉成陣列
// console.log([...question.keys()])
// console.log(question.values())

// question.forEach( (value, key) => console.log(`This is ${key}, and it's set to ${value}`))

for (const [key, value] of question.entries()) {
  if (typeof (key) === 'number') {
    // console.log(`Answer ${key}: ${value}`)
  }
}

const ans = 3;
// console.log(question.get(ans === question.get('correct')))

for (const key of question) {
  console.log(key);
}

console.log(question.entries());

// question.clear()

/*
set(key, value)
get(key)
keys()
values()
has(key)
entries()
delete(key)
clear()
*/
