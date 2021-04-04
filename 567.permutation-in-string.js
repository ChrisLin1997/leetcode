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

  // 1. 找出s1所有字個別出現次數
  // 2. 建立size判斷是否捕捉到所有s1的字
  // 3. 右指標出發 -> 直到找到所有該出現的字
  // 4. 左指標出發 -> 移除視窗內不符合的字
  // 5. 直到 視窗內長度 === s1 return true
  // 6. 未符合 回到step 3
};
// @lc code=end
