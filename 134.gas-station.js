/*
 * @lc app=leetcode id=134 lang=javascript
 *
 * [134] Gas Station
 */

// @lc code=start
/**
 * @param {number[]} gas
 * @param {number[]} cost
 * @return {number}
 */
var canCompleteCircuit = function(gas, cost) {
  let total = 0
  let curr = 0
  let result = null
  
  for (let i = 0; i < gas.length; ++i) {
      total += gas[i] - cost[i]
      curr += gas[i] - cost[i]
      
      if (curr < 0) {
          result = i + 1
          curr = 0
      }
  }
  
  if (total < 0) result = -1
  return result
};
// @lc code=end

