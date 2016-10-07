// Given a list, rotate the list to the right by k places, where k is non-negative.

// For example:
// Given 1->2->3->4->5->NULL and k = 2,
// return 4->5->1->2->3->NULL.

/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} k
 * @return {ListNode}
 */
var rotateRight = function(head, k) {
    if (!head) {
    	return null;
    } else if (head.next === null) {
    	return head;
    }

    var current = head,
    	count = 1;
    while(current.next !== null) {
    	current = current.next;
    	count++;
    }

    if (k > count) {
    	k = k%count;
    }
    
    var tempNode = new ListNode(null);
    tempNode.next = head;
    
    var targetPreNode = tempNode,
        refPointer = tempNode,
        i = 1;
    
    while (i <= k) {
        refPointer = refPointer.next;
        i++;
    }
    
    while(refPointer.next !== null) {
        targetPreNode = targetPreNode.next;
        refPointer = refPointer.next;
    }
    
    if(targetPreNode.next === head) {
        return head;
    } else {
    	refPointer.next = head;
        head = targetPreNode.next;
        targetPreNode.next = null;
        return head;
    }
};