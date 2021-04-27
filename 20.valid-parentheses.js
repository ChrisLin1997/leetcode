/*
 * @lc app=leetcode id=20 lang=javascript
 *
 * [20] Valid Parentheses
 */

// @lc code=start
/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function(s) {
  let i = 0
  const stack = []
  const map = {
    '(' : ')',
    '{' : '}',
    '[' : ']',
  }
  
  while (i < s.length) {
    if (map[stack[stack.length - 1]] === s[i]) stack.pop()
    else stack.push(s[i])
    ++i
  }
    
  return stack.length === 0  
};
// @lc code=end

