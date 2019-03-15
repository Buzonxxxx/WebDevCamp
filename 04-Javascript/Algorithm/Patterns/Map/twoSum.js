// Given nums = [2, 7, 11, 15], target = 9,
// Because nums[0] + nums[1] = 2 + 7 = 9,
// return [0, 1].

var twoSum1 = function(nums, target) {
  const map = new Map();
  for (let i = 0; i<nums.length; i++){
      if (!map.has(target - nums[i])) { 
          map.set(nums[i], i)
          console.log(map)
         }
      else {
        return [map.get(target - nums[i]), i]
      }
  }
};
console.log(twoSum1([1,2,6,8], 8))
// O(n)

var twoSum2 = function(nums, target) {
  for (let i = 0; i<nums.length; i++) {
      for(let j = i+1; j<nums.length; j++){
          if(nums[i] + nums[j] == target) return [i,j];
      }
  }
};

// console.log(twoSum2([1,2,6,8], 8))
// O(n^2)