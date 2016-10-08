// Linked List Cycle II
// Given a linked list, return the node where the cycle begins. If there is no cycle, return null.

// Note: Do not modify the linked list.

/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var detectCycle = function(head) {
    if (!head) {
    	return null;
    }

    var slowP = head,
    	fastP = head;

    while(fastP && fastP.next) {
    	slowP = slowP.next;
    	fastP = fastP.next.next;
    	if (slowP === fastP) {
    		slowP = head;
    		while(slowP !== fastP) {
    			slowP = slowP.next;
    			fastP = fastP.next;
    		}
    		return slowP;
    	}
    }

    return null;
};