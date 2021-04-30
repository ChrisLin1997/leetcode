/*
 * @lc app=leetcode id=331 lang=javascript
 *
 * [331] Verify Preorder Serialization of a Binary Tree
 */

// @lc code=start
/**
 * @param {string} preorder
 * @return {boolean}
 */
var isValidSerialization = function(preorder) {
  const stack = []
  preorder = preorder.split(',')
  let i = 0
  
  while (i <= preorder.length) {
    if (stack[stack.length - 1] === '#' && stack[stack.length - 2] === '#') {
      stack.pop()
      stack.pop()
      stack[stack.length - 1] = '#'
      continue    
    }
    else {
      if (preorder[i]) stack.push(preorder[i])    
      ++i
    }
  }
  
  return stack.length === 1 && stack[0] === '#'
};
// @lc code=end

