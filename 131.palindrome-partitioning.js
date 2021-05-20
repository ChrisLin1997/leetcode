/*
 * @lc app=leetcode id=131 lang=javascript
 *
 * [131] Palindrome Partitioning
 */

// @lc code=start
/**
 * @param {string} s
 * @return {string[][]}
 */
var partition = function(s) {
  const result = []
  const path = []
  
  backTracking(s)
  return result
  
  
  function backTracking (str) {
      if (str === '') {
          if (path.length) result.push([...path])
          return 
      }
      
      for (let i = 1; i <= str.length; ++i) {
          let target = str.substring(0, i)
          if (isPalindrome(target)) {
              path.push(target)
          }
          else continue
          backTracking(str.substring(i))
          path.pop()
      }
  }
  
  function isPalindrome (str) {
      return str === str.split('').reverse().join('')
  }
};
// @lc code=end

