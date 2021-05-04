/*
 * @lc app=leetcode id=496 lang=javascript
 *
 * [496] Next Greater Element I
 */

// @lc code=start
/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */
var nextGreaterElement = function(nums1, nums2) {
  const result = Array(nums2.length).fill(-1)
    const monoStack = []
    
    for (let i = 0; i < nums2.length; ++i) {
        for (let j = monoStack.length - 1;j >= 0; --j) {
            if (nums2[i] > nums2[monoStack[j]] && result[monoStack[j]] === -1) {
                result[monoStack[j]] = nums2[i]
                monoStack.pop()
            } else {
                break
            }
        }
        monoStack.push(i)
    }
    
    const map = {}
    for (let i =0 ; i < nums2.length; ++i) map[nums2[i]] = i
    
    let answer = []
    for (let i = 0; i < nums1.length; ++i ) answer.push(result[map[nums1[i]]])
    return answer
};
// @lc code=end

