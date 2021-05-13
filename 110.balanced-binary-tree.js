/*
 * @lc app=leetcode id=110 lang=javascript
 *
 * [110] Balanced Binary Tree
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
 * @return {boolean}
 */
var isBalanced = function(root, isFirst = true) {
  if (root === null) return isFirst ? true : 0
  
  let left = isBalanced(root.left, false)
  let right = isBalanced(root.right, false)
  if (left === false || right === false) return false
  if (Math.abs(left - right) > 1) return false
  
  return Math.max(left, right) + 1
};
// @lc code=end

