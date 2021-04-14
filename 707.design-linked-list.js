/**
 * Initialize your data structure here.
 */
var MyLinkedList = function() {
  this.dummyHead = new ListNode()
};

/**
* Get the value of the index-th node in the linked list. If the index is invalid, return -1. 
* @param {number} index
* @return {number}
*/
MyLinkedList.prototype.get = function(index) {
  if (index < 0) return -1
  
  let curr = this.dummyHead.next
  let i = 0
  
  while (i < index && curr !== null) {
      curr = curr.next
      ++i
  }
  
  return curr === null ? -1 : curr.val
};

/**
* Add a node of value val before the first element of the linked list. After the insertion, the new node will be the first node of the linked list. 
* @param {number} val
* @return {void}
*/
MyLinkedList.prototype.addAtHead = function(val) {
  this.dummyHead.next = new ListNode (val, this.dummyHead.next)
};

/**
* Append a node of value val to the last element of the linked list. 
* @param {number} val
* @return {void}
*/
MyLinkedList.prototype.addAtTail = function(val) {
  let prev = this.dummyHead
  let curr = this.dummyHead.next
  while (curr !== null) {
      prev = curr
      curr = curr.next
  }
  
  prev.next = new ListNode(val)
}

/**
* Add a node of value val before the index-th node in the linked list. If index equals to the length of linked list, the node will be appended to the end of linked list. If index is greater than the length, the node will not be inserted. 
* @param {number} index 
* @param {number} val
* @return {void}
*/
MyLinkedList.prototype.addAtIndex = function(index, val) {
  let prev = this.dummyHead
  let curr = this.dummyHead.next
  while (index-- > 0) {
      if (curr === null) return
      prev = curr
      curr = curr.next
  }
  
  prev.next = new ListNode(val, curr)
};

/**
* Delete the index-th node in the linked list, if the index is valid. 
* @param {number} index
* @return {void}
*/
MyLinkedList.prototype.deleteAtIndex = function(index) {
  let prev = this.dummyHead
  let curr = this.dummyHead.next
  while (index-- > 0) {
      if (curr === null || prev.next === null) return
      prev = curr
      curr = curr.next
  }
  
  if (prev.next === null) return
  prev.next = prev.next.next
};

/** 
* Your MyLinkedList object will be instantiated and called as such:
* var list = new MyLinkedList()
* var param_1 = list.get(index)
* list.addAtHead(val)
* list.addAtTail(val)
* list.addAtIndex(index,val)
* list.deleteAtIndex(index)
*/