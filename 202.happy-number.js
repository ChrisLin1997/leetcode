/*
 * @lc app=leetcode id=202 lang=javascript
 *
 * [202] Happy Number
 */

// @lc code=start
/**
 * @param {number} n
 * @return {boolean}
 */
var isHappy = function(n) {
  let set = new Set()
  let res = null
  
  while (true) {
    let size = set.size
    nums = n.toString().split('')
    n = nums.reduce((acc, curr) => acc + curr ** 2, 0)
    set.add(n)
    
    if (n === 1 || size === set.size) break
  }
  
  return n === 1
};
// @lc code=end

