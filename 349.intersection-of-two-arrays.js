/*
 * @lc app=leetcode id=349 lang=javascript
 *
 * [349] Intersection of Two Arrays
 */

// @lc code=start
/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */
var intersection = function(nums1, nums2) {
  let i = 0
  const set = new Set(nums1)
  const result = new Set()
  
  while (i < nums2.length) {
    if (set.has(nums2[i])) result.add(nums2[i]);
    ++i
  }
  
  return Array.from(result)
};
// @lc code=end
