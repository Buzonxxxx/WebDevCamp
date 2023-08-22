// Input: intervals = [[1,3],[2,6],[8,10],[15,18]]
// Output: [[1,6],[8,10],[15,18]]

// Input: intervals = [[1,4],[4,5]]
// Output: [[1,5]]
// Explanation: Intervals [1,4] and [4,5] are considered overlapping.

// verify inputs
// sort array: intervals.sort((a, b) => (a[0] - b[0]))
// get the head interval: set intervals[0] to cur
// init a result array
// loop intervals from index 1
// if interval's start point <= cur's endpoint => merge them
    // check if interval's tail is in the cur interval
    // cur[1] = Math.max(intervals[i][1], cur[1])
// else put cur to result array
// update cur to intervals[i]
// push cur to the result array
// return result

var merge = function(intervals) {
    if (intervals.length === 0) return false
    intervals.sort((a, b) => a[0] - b[0])

    let cur = intervals[0]
    let result = []

    for (let i = 1; i < intervals.length; i++) {
        if (intervals[i][0] <= cur[1]) {
            cur[1] = Math.max(intervals[i][1], cur[1])
        } else {
            result.push(cur)
            cur = intervals[i]
        }
    }
    result.push(cur)
    return result
    
};

console.log(merge([[1,3],[2,6],[8,10],[15,18]])) // [[1,6], [8,10], [15,18]]
