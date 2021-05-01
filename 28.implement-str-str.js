/*
 * @lc app=leetcode id=28 lang=javascript
 *
 * [28] Implement strStr()
 */

// @lc code=start
/**
 * @param {string} haystack
 * @param {string} needle
 * @return {number}
 */
var strStr = function(haystack, needle) {
  if (needle === '') return 0

  const next = getNext(needle)
  let n = 0
  
  for (let i = 0;i < haystack.length; ++i) {
    // back
    while (n > 0 && haystack[i] !== needle[n]) n = next[n]
    
    // forward
    if (haystack[i] === needle[n]) ++n
        
    // answer
    if (n === needle.length) return i - needle.length + 1
  }
  
  return -1
  
  function getNext (s) {
    let j = 0
    const next = [0]
    for (let i = 1; i < s.length; ++i) {
      while (j > 0 && s[j] !== s[i]) j = next[j - 1]
      if (s[j] === s[i]) ++j
      next[i] = j
    }
    next.pop()
    next.unshift(0)
    return next
  }
};
// @lc code=end

