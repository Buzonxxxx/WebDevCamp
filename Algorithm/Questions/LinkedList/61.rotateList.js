/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */

// Get list length
// Get rotate count
// Get rotate list from moveLastToFirst function

/**
 * @param {ListNode} head
 * @param {number} k
 * @return {ListNode}
 */
var rotateRight = function(head, k) {
	const originalHead = head
	let listLength = 0
	while (head !== null) {
		listLength++
		head = head.next
	}

	const rotateCount = k % listLength
	let rotateList = originalHead

	for (let i = 0; i < rotateCount; i++) {
		rotateList = moveLastToFirst(rotateList)
	}

    return rotateList
};

// Get first node, second last node and last node
// connect last node to first node
// break connection between second last node and last node
// return last node
const moveLastToFirst = (head) => {
	const firstNode = head
	while (head.next.next !== null) {
		head = head.next
	}
	const secondLastNode = head
	const lastNode = secondLastNode.next
	
	lastNode.next = firstNode
	secondLastNode.next = null
	
	return lastNode
}