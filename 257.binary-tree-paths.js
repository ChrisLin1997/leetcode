/*
 * @lc app=leetcode id=257 lang=javascript
 *
 * [257] Binary Tree Paths
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
 * @return {string[]}
 */
var binaryTreePaths = function(root) {
  let result = []
    
  findLeaf(root, '')
  
  function findLeaf(root, path) {
      if (root === null) return
      
      if (root.left === null && root.right === null) {
          result.push(path + root.val)
          return
      }
      
      path = path + root.val + "->"
      
      findLeaf(root.left, path)
      findLeaf(root.right, path)
  }
  
  return result
};
// @lc code=end

