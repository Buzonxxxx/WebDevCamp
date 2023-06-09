
// Merge Intersection
// [1, 3], [2,4], [6,1], [10,4]  → [1,6], [10,4]  ( [start, length] )

// 1. If args.length === 0, return false
// 2. Declare result array
// 3. Find scope from first interval: i.g. [1,3] => 1 + 3 = 4
// 4. Declare startPoint, newInterval and isLastInterval
//
// 4. Loop over the arguments(inteverals) from index 1
// 5. If inteveral's start or length < 0, return false
// 6.
//    if the new inteveral's start between scope
//      merge two inteverals
//      update scope by new merged inteveral
//    else
//      push previous merged inteveral into result array
//      update startPoint by current inteverals's start
//      update scope by current inteveral
//      replace merged inteveral by current inteveral
//    if loop to the last inteveral, set isLastInterval flag to true
//
// 7. After loop, if isLastInterval flag is true, push current inteveral to result array
// 8. return result array

// mergeInterval([1, 3], [2, 4], [6, 1], [10, 4])

const mergeInterval = (...args) => {  // args = [ [ 1, 3 ], [ 2, 4 ], [ 6, 1 ], [ 10, 4 ] ]
  if (args.length === 0) return false;
  const result = [];
  args.sort((a, b) => a[0] - b[0])

  let cur = args[0]
  
  for (let i = 1; i < args.length; i++) {
    const currentStart = args[i][0]; // 2
    const currentLength = args[i][1]; // 4
    if (currentStart <= cur[0] + cur[1]) { // merge
      cur[1] = Math.max(cur[1], currentStart + currentLength - 1)
    } else {
      result.push(cur);
      cur = args[i]
    }
  }
  result.push(cur);

  return result;
};

console.log(mergeInterval([1, 3], [2, 4], [6, 1], [10, 4]));
console.log(mergeInterval([1,3], [2,6], [8,10], [15,18]));
