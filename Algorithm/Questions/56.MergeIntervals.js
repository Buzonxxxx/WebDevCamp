/**
 * 
 * Given an array of intervals where intervals[i] = [starti, endi], merge all overlapping
 * intervals, and return an array of the non-overlapping intervals that cover 
 * all the intervals in the input.
 * 
 */

// Input: intervals = [[1,3],[2,6],[8,10],[15,18]]
// Output: [[1,6],[8,10],[15,18]]
// Explanation: Since intervals [1,3] and [2,6] overlap, merge them into [1,6].

// verify inputs
// sort array
// set intervals[0] to cur
// init a result array
// loop intervals from index 1
// if interval's start point < cur's endpoint => merge them
// else put cur to result array

var merge = function(intervals) {
    if (intervals.length === 0) return false
    intervals.sort((a,b) => a[0] - b[0])
    
    let cur = intervals[0]
    const result = []

    for (let i = 1; i < intervals.length; i++) {
        if (intervals[i][0] < cur[1]) {
            // merge and also check if tail is also inside cur
            cur[1] = Math.max(cur[1], intervals[i][1])
        } else {
            // update cur
            result.push(cur)
            cur = intervals[i]
        }
    }
    result.push(cur)
    return result
  };

console.log(merge([[1,3],[2,6],[8,10],[15,18]])) // [[1,6], [8,10], [15,18]]
