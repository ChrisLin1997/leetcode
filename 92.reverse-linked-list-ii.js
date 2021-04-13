/*
 * @lc app=leetcode id=92 lang=javascript
 *
 * [92] Reverse Linked List II
 */

// @lc code=start
/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} left
 * @param {number} right
 * @return {ListNode}
 */
var reverseBetween = function(head, left, right) {
  // 取得左側不動的最後節點 & 需逆轉的第一個節點
  let start = head
  let curr = head
  let num = 1
  
  while (num < left) {
    start = curr
    curr = curr.next
    ++num
  }
  
  // 逆轉前首節點 = 逆轉後尾節點
  let end = curr

  // 逆轉區間
  let reverse = null
  while (num <= right) {
    let next = curr.next
    curr.next = reverse
    reverse = curr
    curr = next
    ++num
  }

  // start - reverse - end
  start.next = reverse
  end.next = curr
  return left === 1 ? reverse : head
};
// @lc code=end
