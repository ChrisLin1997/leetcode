/*
 * @lc app=leetcode id=735 lang=javascript
 *
 * [735] Asteroid Collision
 */

// @lc code=start
/**
 * @param {number[]} asteroids
 * @return {number[]}
 */
var asteroidCollision = function(asteroids) {
  let i = 0
  const stack = []
  
  while (i < asteroids.length) {
    if (stack.length === 0) stack.push(asteroids[i])
    // dump
    else if (stack[stack.length - 1] > 0 && asteroids[i] < 0) {

      const asteroid = Math.abs(asteroids[i])
      while (stack[stack.length - 1] > 0 && stack[stack.length - 1] <= asteroid) {
        
        // offset
        if (stack[stack.length - 1] === asteroid) {
          stack.pop()
          break
        }

        stack.pop()
        // stack = [] || last < 0
        if (stack.length === 0 || stack[stack.length - 1] < 0) {
          stack.push(asteroids[i])
          break
        }
      }
    }
    else stack.push(asteroids[i])
    
    ++i
  }
  
  return stack
};
// @lc code=end

