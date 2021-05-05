/*
 * @lc app=leetcode id=901 lang=javascript
 *
 * [901] Online Stock Span
 */

// @lc code=start

var StockSpanner = function() {
  this.stack = []
};

/** 
 * @param {number} price
 * @return {number}
 */
StockSpanner.prototype.next = function(price) {
  let answer = 1
    
  while (this.stack.length) {
      if (this.stack[this.stack.length - 1].price <= price) {
          answer += this.stack.pop().answer
      } else break
  }

  this.stack.push({ answer, price })
  
  return answer
};

/** 
 * Your StockSpanner object will be instantiated and called as such:
 * var obj = new StockSpanner()
 * var param_1 = obj.next(price)
 */
// @lc code=end

