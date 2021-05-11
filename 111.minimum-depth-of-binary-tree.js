/*
 * @lc app=leetcode id=111 lang=javascript
 *
 * [111] Minimum Depth of Binary Tree
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
var minDepth = function(root) {
  if (root === null) return isFirst ? 0 : Number.POSITIVE_INFINITY
  if (root.left === null && root.right === null) return level + 1
  
  return Math.min(minDepth(root.left, level + 1, false), minDepth(root.right, level + 1, false))
};
// @lc code=end

