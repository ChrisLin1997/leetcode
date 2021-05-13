/*
 * @lc app=leetcode id=513 lang=javascript
 *
 * [513] Find Bottom Left Tree Value
 */

// @lc code=start
/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number}
 */
var findBottomLeftValue = function(root) {
  const queue = [root]
  let result = root.val
  
  while (queue.length) {
      let times = queue.length
      result = queue[0].val
      for (let i = 0; i < times; ++i) {
          const node = queue.shift()
          if (node.left) queue.push(node.left)
          if (node.right) queue.push(node.right)
      }
  }
  
  return result
};
// @lc code=end

