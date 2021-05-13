/*
 * @lc app=leetcode id=112 lang=javascript
 *
 * [112] Path Sum
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
 * @param {number} targetSum
 * @return {boolean}
 */
var hasPathSum = function(root, targetSum) {
  let result = false
    
  function traverse(root, total) {
      if (root === null) return
      total += root.val
      if (root.left === null && root.right === null && total === targetSum) {
          result = true
          return
      }
      traverse(root.left, total)
      traverse(root.right, total)
  }
  traverse(root, 0)
  
  return result
};
// @lc code=end

