/*
 * @lc app=leetcode id=925 lang=javascript
 *
 * [925] Long Pressed Name
 */

// @lc code=start
/**
 * @param {string} name
 * @param {string} typed
 * @return {boolean}
 */
var isLongPressedName = function(name, typed) {
  let namePointer = 0
  let typedPointer = 0
  let lastLetter = null
  
  if (name.length > typed.length) return false

  while (typedPointer < typed.length) {
      if (typed[typedPointer] === name[namePointer]) {
          // 符合匹配
          lastLetter = name[namePointer]
          namePointer++
          typedPointer++
      } else if (typed[typedPointer] === lastLetter) {
          // 重複前一個文字略過
          typedPointer++
      } else {
          // 未匹配成功
          return false
      }
  }
  
  // 未匹配完整name
  if (namePointer >= name.length ) return true
  return false
};
// @lc code=end

