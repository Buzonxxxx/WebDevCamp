
// Your previous Java content is preserved below:

// Merge Intersection
// [1, 3], [2,4], [6,1], [10,4]  → [1,6], [10,4]  ( [start, length] )

/**
 * Definition for an interval.
 * public class Interval {
 *     int start;
 *     int length;
 *     Interval() { start = 0; length = 0; }
 *     Interval(int s, int l) { start = s; length = l; }
 * }
 */
// class Solution {
//     public List<Interval> merge(List<Interval> intervals) {

//     }
// }


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

const mergeInterval = (...args) => {
  if (args.length === 0) return false;
  const result = [];
  let scope = args[0][0] + args[0][1];
  let startPoint = args[0][0];
  let newInterval;
  let isLastInterval = false;

  for (let i = 1; i < args.length; i++) {
    const currentStart = args[i][0];
    const currentLength = args[i][1];

    if (currentStart < 0 || currentLength < 0) return false;

    if (currentStart <= scope) {
      newInterval = [startPoint, currentStart + currentLength - 1];
      scope = newInterval[0] + newInterval[1];
    } else {
      result.push(newInterval);
      startPoint = currentStart;
      scope = currentStart + currentLength;
      newInterval = [currentStart, currentLength];
    }
    if (i === args.length - 1) {
      isLastInterval = true;
    }
  }
  if (isLastInterval) {
    result.push(newInterval);
  }
  return result;
};

console.log(mergeInterval([1, 3], [2, 4], [6, 1], [10, 4]));
