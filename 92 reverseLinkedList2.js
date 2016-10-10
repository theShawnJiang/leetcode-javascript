// Reverse Linked List II
// Reverse a linked list from position m to n. Do it in-place and in one-pass.

// For example:
// Given 1->2->3->4->5->NULL, m = 2 and n = 4,
// 1->2->3->4->5->6->NULL   1->5->4->3->2->6->NULL   m = 2, n =
// return 1->4->3->2->5->NULL.

// Note:
// Given m, n satisfy the following condition:
// 1 ≤ m ≤ n ≤ length of list.

/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} m
 * @param {number} n
 * @return {ListNode}
 */
var reverseBetween = function(head, m, n) {
    if (!head || !head.next || m === n) {
    	return head;
    }

    var dummy = new ListNode(0);
    dummy.next = head;
    head = dummy;

    for (var i = 0; i < m - 1; i++) {
    	head = head.next;
    }

    var preNode = head.next,
    	current = preNode.next;

    for (var j = 0; j < n - m; j++) {
    	var tmpNode = current.next;
    	current.next = preNode;
    	preNode = current;
    	current = tmpNode;
    }

    head.next.next = current;
    head.next = preNode;
    
    return dummy.next;
};