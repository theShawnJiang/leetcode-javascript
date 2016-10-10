// Remove Linked List Elements
// Remove all elements from a linked list of integers that have value val.

// Example
// Given: 1 --> 2 --> 6 --> 3 --> 4 --> 5 --> 6, val = 6
// Return: 1 --> 2 --> 3 --> 4 --> 5
/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} val
 * @return {ListNode}
 */
var removeElements = function(head, val) {
    if (!head) {
      return null;
    }

    var dummy = new ListNode(0),
        prev = dummy,
        current = head;
    dummy.next = head;


    while(prev && prev.next){
        if(current.val === val) {
            prev.next = current.next;
            current = prev.next;
        } else {
            prev = current;
            current = current.next;
        }
    }

    return dummy.next;
};
