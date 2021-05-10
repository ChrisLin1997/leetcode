/*
 * @lc app=leetcode id=199 lang=javascript
 *
 * [199] Binary Tree Right Side View
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
 * @return {number[]}
 */
var rightSideView = function(root) {
  const result = []
  if (root === null) return result

  let nextLevel = [root]
  
  while (nextLevel.length) {
      let level = []
      let times = nextLevel.length
      for (let i = 0; i < times; ++i) {
          let node = nextLevel.shift()
          level.push(node.val)
          if (node.left) nextLevel.push(node.left)
          if (node.right) nextLevel.push(node.right)
      }
      if (level.length) result.push(level.pop())
  }
      
  return result
};
// @lc code=end

