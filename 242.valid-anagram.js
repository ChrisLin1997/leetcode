/*
 * @lc app=leetcode id=242 lang=javascript
 *
 * [242] Valid Anagram
 */

// @lc code=start
/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isAnagram = function(s, t) {
  if (s.length !== t.length) return false
    
  let i = 0
  const hash = {}
  
  while (i < s.length) {
    hash[s[i]]  = hash[s[i]] ? hash[s[i]] + 1 : 1
    hash[t[i]]  = hash[t[i]] ? hash[t[i]] - 1 : -1
    ++i    
  }
  
  return Object.values(hash).every(num => num === 0)
};
// @lc code=end

