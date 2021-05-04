/*
 * @lc app=leetcode id=496 lang=javascript
 *
 * [496] Next Greater Element I
 */

// @lc code=start
/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */
var nextGreaterElement = function(nums1, nums2) {
  const result = Array(nums2.length).fill(-1)
  const monoStack = []
  
  for (let i = 0; i < nums2.length; ++i) {
      for (let j = monoStack.length - 1;j >= 0; --j) {
          if (nums2[i] > nums2[monoStack[j]] && result[monoStack[j]] === -1) {
              result[monoStack[j]] = nums2[i]
              monoStack.pop()
          } else {
              break
          }
      }
      monoStack.push(i)
  }
  
  const indexList = []
  for (let num of nums1) {
      for (let i = 0;i < nums2.length; ++i) {
          if (nums2[i] === num) {
              indexList.push(i)
              break
          }
      }
  }
  
  let answer = []
  for (let index of indexList) {
      answer.push(result[index])
  }
  
  return answer
};
// @lc code=end

