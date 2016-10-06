// Merge two sorted linked lists and return it as a new list. The new list should be made by splicing together the nodes of the first two lists.
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
var mergeTwoLists = function(l1, l2) {
    if (!l1 && !l2) {
        return null;
    } else if (!l1) {
      return l2;
    } else if (!l2){
      return l1;
    }

    var p1Node = l1,
        p2Node = l2,
        head,
        preNode;

    preNode = (p1Node.val <= p2Node.val ? new ListNode(p1Node.val) : new ListNode(p2Node.val));
    head = preNode;

    while(p1Node && p2Node) {
      if (p1Node.val <= p2Node.val) {
          preNode.next = new ListNode(p1Node.val);
          p1Node = p1Node.next;
      } else if (p1Node.val > p2Node.val) {
          preNode.next = new ListNode(p2Node.val);
          p2Node = p2Node.next;
      }
      preNode = preNode.next;
    }

    if (p1Node) {
      preNode.next = p1Node;
    } else {
      preNode.next = p2Node;
    }

    return head.next;

};
