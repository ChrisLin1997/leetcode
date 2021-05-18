/*
 * @lc app=leetcode id=530 lang=javascript
 *
 * [530] Minimum Absolute Difference in BST
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
var getMinimumDifference = function(root) {
  const inorder = traverse(root)
  let min = Infinity
  for (let i = 1; i < inorder.length; ++i) {
      if (inorder[i] - inorder[i - 1] < min) min = inorder[i] - inorder[i - 1]
  }
  return min
  
  function traverse (root, result = []) {
      if (root !== null) {
          traverse(root.left, result)
          result.push(root.val)
          traverse(root.right, result)    
      }
      return result
  }
};
// @lc code=end

