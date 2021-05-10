/*
 * @lc app=leetcode id=429 lang=javascript
 *
 * [429] N-ary Tree Level Order Traversal
 */

// @lc code=start
/**
 * // Definition for a Node.
 * function Node(val,children) {
 *    this.val = val;
 *    this.children = children;
 * };
 */

/**
 * @param {Node|null} root
 * @return {number[][]}
 */
var levelOrder = function(root) {
  const result = []
  if (root === null) return result

  let nextLevel = [root]
  
  while (nextLevel.length) {
      
      let level = []
      let times = nextLevel.length
      for (let i =0 ; i < times; ++i) {
          let node = nextLevel.shift()
          level.push(node.val)
          for (let i = 0; i < node.children.length; i++) {
              nextLevel.push(node.children[i]);
          }
      }
      
      if (level.length) result.push(level)
  }
      
  return result
};
// @lc code=end

