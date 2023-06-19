/*
 * Merge two sorted linked lists and return it as a new list.
 * The new list should be made by splicing together the nodes of the first two lists.
 *
 * Example:
 * Input: 1->2->4, 1->3->4
 * Output: 1->1->2->3->4->4
 */

/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */

// Input: list1 = [1,2,4], list2 = [1,3,4]
// Output: [1,1,2,3,4,4]


var mergeTwoLists = function(list1, list2) {
  const result = new ListNode()
  let current = result

  while (list1 !== null && list2 !== null) {
    if (list1.val > list2.val) {
      current.next = list2
      list2 = list2.next
    } else {
      current.next = list1
      list1 = list1.next
    }
    current = current.next
  }

  if (list1 !== null) {
    current.next = list1
  }

  if (list2 !== null) {
    current.next = list2
  }
  // return result.next，因為一開始我們多弄了一個 value 為 0 的頭，不能把它傳回去，會報錯
  return result.next

};