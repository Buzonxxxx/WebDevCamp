// Recursion: A function call itself
/*
 * 1. base case
 * 2. different input
 */

 // Recursive Version
function countDown1(num){
  if(num <= 0) {
      console.log("All done!");
      return;
  }
  console.log(num);
  num--;
  countDown1(num);
}
countDown1(3)

// Iterative Version
function countDown2(num){
  for(var i = num; i > 0; i--){
      console.log(i);
  }
  console.log("All done!")
}

countDown2(3)