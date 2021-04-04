/*
 * @lc app=leetcode id=3 lang=javascript
 *
 * [3] Longest Substring Without Repeating Characters
 */

// @lc code=start
/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function(s) {
  let result = 0
  let right = 0
  let left = 0
  let map = {}
  
  while (right < s.length) {
    // 不重複的
    if (!map[s[right]]) map[s[right]] = ++map[s[right]] || 1
    // 重複的
    else ++map[s[right]]
    
    while (map[s[right]] > 1 && left <= right) {
      // 減去重複的字 直到無重複
      if (map[s[left]] > 1) --map[s[left]]
      else if (map[s[left]]) --map[s[left]]

      left++
    }
    
    if ((right -left + 1) > result) result = right -left + 1

    right ++
  }
  
  return result
};
// @lc code=end

