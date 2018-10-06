// Loop over the longer string
// Loop over the shorter string
// If the characters don't match, break out of the inner loop
// If the characters do match, keep going
// If you complete the inner loop and find a match, increment the count of matches
// Return the count

// 'assdomgasdasomg', 'omg' => 2 


function stringSearch(long, short){
  var count = 0;
  for(var i = 0; i < long.length; i++){
      for(var j = 0; j < short.length; j++){
         // 逐一比對
         if(short[j] !== long[i+j]) break;
         // if match, then j should be the last index of short string
         if(j === short.length - 1) count++;
      }
  }
  return count;
}

console.log(stringSearch("lorie loled", "lo"))