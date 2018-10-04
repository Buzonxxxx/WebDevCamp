// find pair's sum is equal to 8

// [1, 2, 3, 9] sum = 8
// [1 ,2, 4, 4] sum = 8

const arr1 = [1 ,2, 4, 4]
for (let i = 0; i<arr1.length; i++) {
  for (let j = i+1; j<arr1.length; j++) {
    if (arr1[i] + arr1[j] == 8) {
      console.log(`I got the pair, they are ${arr1[i]} and ${arr1[j]}`)
    }  
  }
}

/**
 * 
 * return 
 */