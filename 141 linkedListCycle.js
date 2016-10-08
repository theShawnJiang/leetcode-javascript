// Linked List Cycle
// Given a linked list, determine if it has a cycle in it.
/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

/**
 * @param {ListNode} head
 * @return {boolean}
 */
var hasCycle = function(head) {
    if (!head) {
    	return false;
    }

    var slowP = head,
    	fastP = head;

    while(fastP && fastP.next) {
    	slowP = slowP.next;
    	fastP = fastP.next.next;
    	if (slowP === fastP) {
    		return true;
    	}
    }

    return false;
};