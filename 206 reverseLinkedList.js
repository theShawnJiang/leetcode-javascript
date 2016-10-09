// Reverse Linked List
// A linked list can be reversed either iteratively or recursively. Could you implement both?
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

// iteratively
var reverseListIteratively = function(head) {
    var curr = head;
    var prev = null;
    
    while(curr) {
        var next = curr.next;
        curr.next = prev;
        prev = curr;
        curr = next; 
    }
    
    return prev;
};

// recursively
var reverseListRecursively = function(head) {
    if (!head || !head.next) {
    	return head;
    } 

    var second = head.next;
    head.next = null;

    var restNode = reverseListRecursively(second);
    second.next = head;

    return restNode;
};
