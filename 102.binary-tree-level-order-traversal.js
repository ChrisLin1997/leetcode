/*
 * @lc app=leetcode id=102 lang=javascript
 *
 * [102] Binary Tree Level Order Traversal
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
 * @return {number[][]}
 */
var levelOrder = function(root) {
  const result = []
  let currLevel = []
  let nextLevel = [root]
  
  while (nextLevel.length) {
      currLevel = nextLevel
      nextLevel = []
      const level = []
      
      for (let i = 0; i < currLevel.length; ++i) {
          if (currLevel[i] === null) continue
          level.push(currLevel[i].val)
          nextLevel.push(currLevel[i].left)
          nextLevel.push(currLevel[i].right)
      }
      if (level.length) result.push(level)
  }
  
  return result
};
// @lc code=end

