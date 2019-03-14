const logAtLeast = n => {
  for (var i=1; i<=Math.max(5, n); i++)
 console.log(i)
 }
 
const logAtMost = n => {
  for (var i=1; i<=Math.min(5, n); i++)
  console.log(i)
}
  
logAtLeast(100)
//  time complexity: O(n)

logAtMost(100)
//  time complexity: O(1)