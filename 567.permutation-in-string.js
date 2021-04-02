/*
 * @lc app=leetcode id=567 lang=javascript
 *
 * [567] Permutation in String
 */

// @lc code=start
/**
 * @param {string} s1
 * @param {string} s2
 * @return {boolean}
 */
var checkInclusion = function(s1, s2) {
  const map = {}
  for (const letter of s1) { map[letter] = map[letter] + 1 || 1 }

  let right = 0
  let left = 0
  let size = Object.keys(map).length

  while (right < s2.length) {

    if (s2[right] in map) --map[s2[right]]
    if (map[s2[right]] === 0) --size

    while (size === 0) {

      if (right - left + 1 === s1.length) return true
      if (s2[left] in map) ++map[s2[left]]
      if (map[s2[left]] > 0) ++size

      ++left
    }

    ++right
  }

  return false
};
// @lc code=end
