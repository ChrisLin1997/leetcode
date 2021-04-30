/*
 * @lc app=leetcode id=541 lang=javascript
 *
 * [541] Reverse String II
 */

// @lc code=start
/**
 * @param {string} s
 * @param {number} k
 * @return {string}
 */
var reverseStr = function(s, k) {
  s = s.split('')
    
  let left = 0
  let right = k - 1
  
  while (s[right]) {
      let innerLeft = left
      let innerRight = right
      while (innerLeft < innerRight) {
          [s[innerLeft], s[innerRight]] = [s[innerRight], s[innerLeft]];
          ++innerLeft
          --innerRight
      }
      left += 2 * k
      right += 2 * k
  }
  
  if (s.length - left  < k)  {
      s.splice(left, s.length - left, ...s.slice(left, s.length).reverse())
  }
  
  return s.join('')
};
// @lc code=end

