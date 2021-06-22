/*
 * @lc app=leetcode id=75 lang=javascript
 *
 * [75] Sort Colors
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var sortColors = function(nums) {
  // 冒泡排序 => 由前向後走，一次比較兩個，順序錯誤就交換
  for (let i = 0; i < nums.length - 1; ++i) {
    for (let j = 0; j < nums.length - 1 -i; ++j) {
      if (nums[j] > nums[j + 1]) {
        const temp = nums[j + 1]
        nums[j + 1] = nums[j]
        nums[j] = temp
      }
    }
  }
  
  // 選擇排序 => 從未選擇中找到最大(小)排序
  for (let i = 0; i < nums.length - 1; ++i) {
      let minIndex = i
      for (let j = i + 1; j < nums.length; ++j) {
          if (nums[minIndex] >= nums[j]) {
              minIndex = j
          }
      }
      const temp = nums[i]
      nums[i] = nums[minIndex]
      nums[minIndex] = temp
  }
  
  // 插入排序 => 遍歷元素，目標元素向前找到正確位置插入
  for (let i = 1; i < nums.length; ++i) {
      let preIndex = i - 1
      let curr = nums[i]
      
      while (preIndex >= 0 && nums[preIndex] > curr) {
          nums[preIndex + 1] = nums[preIndex]
          preIndex--
      }
      
      nums[preIndex + 1] = curr
  }

  // 合併排序
  if (nums.length === 1) return nums
    
  const middle = Math.floor(nums.length / 2)
  
  const left = nums.slice(0, middle)
  const right = nums.slice(middle)
  
  return merge(sortColors(left), sortColors(right))
  
  function merge (left, right) {
      const result = []
      
      let leftIndex = 0
      let rightIndex = 0
      
      while (leftIndex < left.length && rightIndex < right.length) {
          if (left[leftIndex] < right[rightIndex]) result.push(left[leftIndex++])
          else result.push(right[rightIndex++])
      }
      
      return result.concat(left.slice(leftIndex)).concat(right.slice(rightIndex))
  }

  return nums
};
// @lc code=end

