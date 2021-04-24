/*
 * @lc app=leetcode id=18 lang=javascript
 *
 * [18] 4Sum
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[][]}
 */
var fourSum = function(nums, target) {
  if (nums.length < 4) return []
  nums.sort((a, b) => a - b)
  
  let small = 0
  let result = []
  
  while (small < nums.length - 3) {
    let innerSmall = small + 1
    
    while (innerSmall < nums.length - 2) {
      let left = innerSmall + 1
      let right = nums.length - 1
      
      while (left < right) { 
        const sum = nums[small] + nums[innerSmall] + nums[left] + nums[right]
        if (sum < target) ++left
        else if (sum > target) --right
        else {
          result.push([nums[small], nums[innerSmall], nums[left], nums[right]])
          while (nums[++left] === nums[left - 1]) {}
          while (nums[--right] === nums[right + 1]) {}
        }
      }

      while (nums[++innerSmall] === nums[innerSmall - 1]) {}
    }

    while (nums[++small] === nums[small - 1]) {}
  }
  
  return result
};
};
// @lc code=end

