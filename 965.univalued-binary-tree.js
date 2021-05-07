/*
 * @lc app=leetcode id=965 lang=javascript
 *
 * [965] Univalued Binary Tree
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
var isUnivalTree = function(root) {
  function isUniValued (root, val) {
    if (root === null) return true
    
    if (root.val !== val) return false
    
    return isUniValued(root.left, val) && isUniValued(root.right, val)
  }

  return isUniValued(root, root.val)
};
// @lc code=end

