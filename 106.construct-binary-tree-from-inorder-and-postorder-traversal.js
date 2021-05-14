/*
 * @lc app=leetcode id=106 lang=javascript
 *
 * [106] Construct Binary Tree from Inorder and Postorder Traversal
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
 * @param {number[]} inorder
 * @param {number[]} postorder
 * @return {TreeNode}
 */
var buildTree = function(inorder, postorder) {
  if (inorder.length === 0) return null
    
  const root = new TreeNode(postorder.pop())
  const rootIndex = inorder.indexOf(root.val)
  
  // postorder => 左右中 回推順序 中右左
  root.right = buildTree(inorder.slice(rootIndex + 1), postorder)
  root.left = buildTree(inorder.slice(0, rootIndex), postorder)
  
  return root
};
// @lc code=end

