// Remove Nth Node From End of List
// Given linked list: 1->2->3->4->5, and n = 2.
// After removing the second node from the end, the linked list becomes 1->2->3->5.
/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} n
 * @return {ListNode}
 */
var removeNthFromEnd = function(head, n) {
    if(head.next === null) {
        return null;
    }
    
    var tempNode = new ListNode(null);
    tempNode.next = head;
    
    var targetPreNode = tempNode,
        refPointer = tempNode,
        i = 1;
    
    while (i <= n) {
        refPointer = refPointer.next;
        i++;
    }
    
    while(refPointer.next !== null) {
        targetPreNode = targetPreNode.next;
        refPointer = refPointer.next;
    }
    
    if(targetPreNode.next === head) {
        return head.next;
    } else {
        targetPreNode.next = targetPreNode.next.next;
        return head;
    }
    
};