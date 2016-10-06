/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
var addTwoNumbers = function(l1, l2) {
    if(!l1 || !l2) {
    	return l1 || l2;
    }

    var head = new ListNode(0);
    var pos = head;
    var temp = 0;

    while(l1 || l2 || temp > 0) {
    	pos.next = new ListNode(0);
    	pos = pos.next;

    	if (l1) {
    		temp += l1.val;
    		l1 = l1.next;
    	}
    	if (l2) {
    		temp += l2.val;
    		l2 = l2.next;
    	}
    	pos.val = temp % 10;
    	temp = parseInt(temp / 10);
    }

    return head.next;

};