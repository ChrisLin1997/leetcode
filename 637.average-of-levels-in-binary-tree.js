/*
 * @lc app=leetcode id=637 lang=javascript
 *
 * [637] Average of Levels in Binary Tree
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
var averageOfLevels = function(root) {
  const result = []
  if (root === null) return result 

  let nextLevel = [root]
  
  while (nextLevel.length) {
      let level = []
      const times = nextLevel.length
      for (let i = 0; i < times ; ++i) {
          let node = nextLevel.shift()
          level.push(node.val)
          if (node.left) nextLevel.push(node.left)
          if (node.right) nextLevel.push(node.right)
      }
      
      if (level.length) {
          result.push(level.reduce((acc, curr) => acc + curr, 0) / level.length)
      }
  }
      
  return result
};
// @lc code=end

