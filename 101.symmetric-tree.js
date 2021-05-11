/*
 * @lc app=leetcode id=101 lang=javascript
 *
 * [101] Symmetric Tree
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

var isSymmetric = function(root) {
  // recursively
  const isMirror = (left, right) => {
    if (left === null && right === null) return true
    if (left?.val !== right?.val) return false
    return isMirror(left.left, right.right) && isMirror(left.right, right.left)
  }
  return isMirror(root.left, root.right)
};

var isSymmetric = function(root) {
    // BFS
    let leftList = []
    let rightList = []
    let nextLeftList = [root.left]
    let nextRightList = [root.right]
    
    while (nextLeftList.length || nextRightList.length) {
        // compare
        let max = Math.max(nextLeftList.length, nextRightList.length)
        for (let i = 0; i < max; ++i) {
            if (nextLeftList[i]?.val !== nextRightList[max - 1 - i]?.val) return false
        }
        
        // next level
        leftList = nextLeftList
        rightList = nextRightList
        nextLeftList = []
        nextRightList = []
        for (let i = 0; i < leftList.length; ++i) {
            if (leftList[i]) {
                nextLeftList.push(leftList[i].left)
                nextLeftList.push(leftList[i].right)
            }
            if (rightList[i]) {
                nextRightList.push(rightList[i].left)
                nextRightList.push(rightList[i].right)
            }
        }
    }
    
    return true
};
// @lc code=end
