/*
 * @lc app=leetcode id=860 lang=javascript
 *
 * [860] Lemonade Change
 */

// @lc code=start
/**
 * @param {number[]} bills
 * @return {boolean}
 */
var lemonadeChange = function(bills) {
  if (bills[0] !== 5) return false
  let five = 0
  let ten = 0
  
  for (let bill of bills) {
      if (bill === 5) {
          ++five
      } else if (bill === 10) {
          --five
          ++ten
      } else {
          if (ten === 0) five -= 3
          else {
              --five
              --ten
          }
      }
      
      if (five < 0 || ten < 0) return false
  }
  
  return true
};
// @lc code=end

