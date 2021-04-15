/*
 * @lc app=leetcode id=19 lang=javascript
 *
 * [19] Remove Nth Node From End of List
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
 * @param {number} n
 * @return {ListNode}
 */
var removeNthFromEnd = function(head, n) {
  let dummyNode = new ListNode(0, head)
  let curr = dummyNode.next
  
  let length = 0
  while (curr !== null) {
      curr = curr.next
     ++length
  }
  n = length - n + 1
  
  curr = dummyNode.next
  
  let prev = dummyNode
  let i = 1
  while (i < n) {
      prev = curr
      curr = curr.next
      ++i
  }
  
  prev.next = curr.next
  return dummyNode.next
};
// @lc code=end

