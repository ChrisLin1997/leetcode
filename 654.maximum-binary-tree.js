/*
 * @lc app=leetcode id=654 lang=javascript
 *
 * [654] Maximum Binary Tree
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
 * @param {number[]} nums
 * @return {TreeNode}
 */
var constructMaximumBinaryTree = function(nums) {
  let max
  for (let num of nums) if (!max || max < num) max = num
  let index = nums.findIndex(item => item === max)
  let leftNums = nums.slice(0, index)
  let rightNums = nums.slice(index + 1)

  if (max === undefined) return null
  const node = new TreeNode(max)

  node.left = constructMaximumBinaryTree(leftNums)
  node.right = constructMaximumBinaryTree(rightNums)

  return node
};
// @lc code=end

