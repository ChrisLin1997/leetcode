/*
 * @lc app=leetcode id=503 lang=javascript
 *
 * [503] Next Greater Element II
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number[]}
 */
var nextGreaterElements = function(nums) {
  let newNums = [...nums, ...nums]
  const result = Array(newNums.length).fill(-1)
  const monoStack = []
  
  for (let i = 0; i < newNums.length; ++i) {
    for (let j = monoStack.length - 1;j >= 0; --j) {
      if (newNums[i] > newNums[monoStack[j]] && result[monoStack[j]] === -1) {
        result[monoStack[j]] = newNums[i]
        monoStack.pop()
      } else {
        break
      }
    }
    monoStack.push(i)
  }
      
  return result.slice(0, newNums.length / 2)
};
// @lc code=end

