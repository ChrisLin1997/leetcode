/*
 * @lc app=leetcode id=1 lang=javascript
 *
 * [1] Two Sum
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(nums, target) {
  let map = {}
  for (let i = 0; i < nums.length; i++) {
      map[target - nums[i]] = i
  }
  
  for (let i = 0; i < nums.length; i++) {
      if (map[nums[i]] && map[nums[i]] !== i) {
          return map[nums[i]] < i ? [map[nums[i]], i] : [i, map[nums[i]]]
      }
  }
};
// @lc code=end

