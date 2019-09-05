var singleNumber = function(nums) {
  const map = new Map();
  for (let i = 0; i < nums.length; i++){
    if (!map.has(nums[i])) {
      map.set(nums[i], 1)
    } 
    else {
      map.set(nums[i]), map.get(nums[i] + 1)
    }
  }
  for (let i = 0; i < nums.length; i++){
    if(map.get(nums[i]) == 1) return nums[i]
  }
};

console.log(singleNumber([4,1,2,1,2]))