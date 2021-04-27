/*
 * @lc app=leetcode id=150 lang=javascript
 *
 * [150] Evaluate Reverse Polish Notation
 */

// @lc code=start
/**
 * @param {string[]} tokens
 * @return {number}
 */
var evalRPN = function(tokens) {
  let i = 0
  const stack = []
  const map = {
    '+' : '+',
    '-' : '-',
    '*' : '*',
    '/' : '/',
  }
  
  while (i < tokens.length) {
    if (map[tokens[i]]) {
      // const value = parseInt(eval(`(${stack[stack.length - 2]})${tokens[i]}(${stack[stack.length - 1]})`))
      let value = 0
      if (map[tokens[i]] === '+') value = stack[stack.length - 2] + stack[stack.length - 1]
      else if (map[tokens[i]] === '-') value = stack[stack.length - 2] - stack[stack.length - 1]
      else if (map[tokens[i]] === '*') value = stack[stack.length - 2] * stack[stack.length - 1]
      else if (map[tokens[i]] === '/') value = stack[stack.length - 2] / stack[stack.length - 1]
      stack.pop()
      stack.pop()
      stack.push(parseInt(value))
    } else {
      stack.push(parseInt(tokens[i]))
    }
    
    ++i
  }
  
  return stack[0]
};
// @lc code=end

