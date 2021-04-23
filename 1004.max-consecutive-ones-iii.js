/*
 * @lc app=leetcode id=1004 lang=javascript
 *
 * [1004] Max Consecutive Ones III
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var longestOnes = function(nums, k) {
  let flipTimes = 0
  let left = 0
  let right = 0
  let result = 0
  
  while (right < nums.length) {
      if (nums[right] === 0) {            
          if (k) {
              // 重點 (
              if (flipTimes >= k) {
                  while (nums[left++] === 1);
                  --flipTimes
              }
              // )

              ++flipTimes
          } else {
              left = right + 1    
          }
      }
      
      result = Math.max(result, right - left + 1)
      ++right
  }
  
  return result

//   let left = 0
//   let right = 0
//   let result = 0
//   let i = 0
  
//   while (right < nums.length) {
//     if (nums[right] === 0) {
//         if (k) {
//             ++i
//             while (i > k) {
//                 if (nums[left++] === 0) --i
//             }
            
//         } else {
//             left = right + 1
//         }
//     }
    
//     result = Math.max(result, right - left + 1)
//     right++
//   }
  
//   return result
};
// @lc code=end

