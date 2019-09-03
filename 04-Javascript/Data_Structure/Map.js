/*
pros use Map rather than obj: 
1. Anything can be keys
2. map is iterable
3. easy to get map size
4. easy to add/remove value in map

When to use?
=> you should always use a Map when you need a key-value collection
https://en.wikipedia.org/wiki/Associative_array
*/

// https://blog.kdchang.cc/2016/09/23/javascript-data-structure-algorithm-dictionary-hash-table/

const question = new Map()
question.set('question', 'What is the official name of the latest major Javascript version?')
question.set(1, 'ES5') 
question.set(2, 'ES6')
question.set(3, 'ES2015')
question.set(4, 'ES7')
question.set('correct', 3)
question.set(true, 'Correct answer :D')
question.set(false, 'Wrong, please try again!')

console.log(question.get('question'))
console.log(question.size)
if(question.has(4)) question.delete(4)
console.log(question.entries())
console.log(question.keys())
console.log(question.values())

question.forEach( (value, key) => console.log(`This is ${key}, and it's set to ${value}`))

for (let [key, value] of question.entries()){
  if (typeof(key) === 'number'){
    console.log(`Answer ${key}: ${value}`)
  }
}

const ans = 3
console.log(question.get(ans === question.get('correct')))

question.clear()
console.log(question.entries())

/* 
clear()
delete(key)
entries()
get(key)
has(key)
keys()
values()
set(key, value)
*/

var twoSum = function(nums, target) {
  const map = new Map();
  for (let i = 0; i < nums.length; i++){
      if (!map.has(target - nums[i])) { 
          map.set(nums[i], i)
        }
      else {
        return [map.get(target - nums[i]), i]
      }
  }
};

console.log(twoSum([1,2,3,6], 9))



