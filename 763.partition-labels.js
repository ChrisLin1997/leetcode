/*
 * @lc app=leetcode id=763 lang=javascript
 *
 * [763] Partition Labels
 */

// @lc code=start
/**
 * @param {string} s
 * @return {number[]}
 */
var partitionLabels = function(s) {
  const charMap = {}
  const result = []
  
  for (let i = 0; i < s.length; ++i) charMap[s[i]] = i
  
  let end = 0
  let prevEnd = 0
  for (let i = 0; i < s.length; ++i) {
      if (charMap[s[i]] > end) end = charMap[s[i]]
      
      if (end === i) {
          result.push(i + 1 - prevEnd)
          prevEnd = i + 1
      }
  }
  
  return result
};
// @lc code=end

