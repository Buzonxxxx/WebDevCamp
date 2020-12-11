// Given two sorted integer arrays nums1 and nums2, merge nums2 into nums1 as one sorted array.

// Note:

// The number of elements initialized in nums1 and nums2 are m and n respectively.
// You may assume that nums1 has enough space (size that is equal to m + n) to hold additional elements from nums2.
// Example:

// Input:
// nums1 = [1,2,3,0,0,0], m = 3
// nums2 = [2,5,6],       n = 3

// Output: [1,2,2,3,5,6]

var merge = function(nums1, m, nums2, n) {
  let idx1 = m - 1, idx2 = n - 1, idx3 = m + n - 1;
  while (idx2 >= 0) {
      if (nums1[idx1] > nums2[idx2]) {
          nums1[idx3] = nums1[idx1]
          idx3--
          idx1--
      } else {
          nums1[idx3] = nums2[idx2]
          idx3--
          idx2--
      }
  }
  console.log(nums1)
};

merge([1,2,3,0,0,0], 3, [2,5,6], 3)
