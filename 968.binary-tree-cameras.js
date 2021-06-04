/*
 * @lc app=leetcode id=968 lang=javascript
 *
 * [968] Binary Tree Cameras
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
var minCameraCover = function(root) {
    // 0 noCover 沒有覆蓋
    // 1 camera 相機
    // 2 cover 有覆蓋

    let result = 0
    treeRoot = traversal(root)
    
    if (treeRoot === 0) ++result

    function traversal (node) {
        if (node === null) return 2
        
        // 順序重要
        const left = traversal(node.left)
        const right = traversal(node.right)
        
        if (left === 2 && right === 2) return 0
        if (left === 0 || right === 0) {
            ++result
            return 1
        }
        if (left === 1 || right === 1) return 2
        
    }
    return result
};
// @lc code=end

