/*
 * @lc app=leetcode id=1047 lang=javascript
 *
 * [1047] Remove All Adjacent Duplicates In String
 */

// @lc code=start
/**
 * @param {string} S
 * @return {string}
 */
var removeDuplicates = function(S) {
  let i = 0
  let stack = []
  
  while (i < S.length) {
    if (stack[stack.length - 1] === S[i]) stack.pop()
    else stack.push(S[i])
    
    ++i
  }
  
  return stack.join('')
};
// @lc code=end

