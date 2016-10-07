// Remove Duplicates from Sorted List II
// Given a sorted linked list, delete all nodes that have duplicate numbers, 
// leaving only distinct numbers from the original list.

// For example,
// Given 1->2->3->3->4->4->5, return 1->2->5.
// Given 1->1->1->2->3, return 2->3.
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
'use strict';
var deleteDuplicates = function(head) {
    var dummyNode = new ListNode(0),
    	current = head,
    	duplicateVal = null;

   	dummyNode.next = head;
   	var preNode = dummyNode;
    		
    	
    while(current && current.next) {
    	if (current.val === duplicateVal || current.val === current.next.val) {
    		duplicateVal = current.val;
    		preNode.next = current.next;
    	} else {
    		preNode = preNode.next;
    	}

    	current = current.next;
    }	

    if (current &&  current.val === duplicateVal) {
    	preNode.next = null;
    }

    return dummyNode.next;

};