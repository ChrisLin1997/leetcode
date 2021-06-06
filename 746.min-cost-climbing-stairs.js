/*
 * @lc app=leetcode id=746 lang=javascript
 *
 * [746] Min Cost Climbing Stairs
 */

// @lc code=start
/**
 * @param {number[]} cost
 * @return {number}
 */
var minCostClimbingStairs = function(cost) {
  let dp0 = cost[0]
  let dp1 = cost[1]
  
  for (let i = 2;i < cost.length; ++i) {
      let min = Math.min(dp0, dp1) + cost[i]
      dp0 = dp1
      dp1 = min
  }
  
  return Math.min(dp0, dp1)
};
// @lc code=end

