/*
 * @lc app=leetcode id=383 lang=javascript
 *
 * [383] Ransom Note
 */

// @lc code=start
/**
 * @param {string} ransomNote
 * @param {string} magazine
 * @return {boolean}
 */
var canConstruct = function(ransomNote, magazine) {
  const map = new Map()
    
  for (const str of magazine) {
    map.set(str, (map.get(str) + 1) || 1)
  }
  
  for (const str of ransomNote) {
    map.set(str, (map.get(str) || 0) - 1)
    if (map.get(str) < 0) return false
  }
  
  return true
};
// @lc code=end

