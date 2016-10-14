// Write a program to find the node at which the intersection of two singly linked lists begins.


// For example, the following two linked lists:

// A:          a1 → a2
//                    ↘
//                      c1 → c2 → c3
//                    ↗
// B:     b1 → b2 → b3
// begin to intersect at node c1.


// Notes:

// If the two linked lists have no intersection at all, return null.
// The linked lists must retain their original structure after the function returns.
// You may assume there are no cycles anywhere in the entire linked structure.
// Your code should preferably run in O(n) time and use only O(1) memory.
/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

/**
 * @param {ListNode} headA
 * @param {ListNode} headB
 * @return {ListNode}
 */
var getIntersectionNode = function(headA, headB) {
    if (!headA || !headB) {
      return null;
    }

    var currentA = headA,
        currentB = headB,
        lenA = 1,
        lenB = 1,
        lenDiff = 0;

    while (currentA.next) {
      currentA = currentA.next;
      lenA++;
    }
    currentA = headA;
    while (currentB.next) {
      currentB = currentB.next;
      lenB++;
    }
    currentB = headB;

    if (lenA > lenB) {
      lenDiff = lenA - lenB;
      while (lenDiff) {
        currentA = currentA.next;
        lenDiff--;
      }
    } else if (lenA < lenB) {
      lenDiff = lenB - lenA;
      while (lenDiff) {
        currentB = currentB.next;
        lenDiff--;
      }
    }

    while (currentA && currentB) {
      if (currentA === currentB) {
        return currentA;
      }
      currentA = currentA.next;
      currentB = currentB.next;
    }

    return null;
};
