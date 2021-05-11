/*
 * @lc app=leetcode id=104 lang=javascript
 *
 * [104] Maximum Depth of Binary Tree
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
var maxDepth = function(root) {
  let maxDeep = 0
    
  function getDeep (root, level) {
      if (root === null) return
      else maxDeep = Math.max(maxDeep, level + 1)
      
      getDeep(root.left, level + 1)
      getDeep(root.right, level + 1)
  }
  
  getDeep(root, maxDeep)
  
  return maxDeep
};
// @lc code=end

