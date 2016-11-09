// Given a binary tree, return the level order traversal of its nodes' values. (ie, from left to right, level by level).
//
// For example:
// Given binary tree [3,9,20,null,null,15,7],
//     3
//    / \
//   9  20
//     /  \
//    15   7
// return its level order traversal as:
// [
//   [3],
//   [9,20],
//   [15,7]
// ]
/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number[][]}
 */
var levelOrder = function(root) {
  var result = [];

  function preOrderTraversal(root, level) {
    if(!root) {
      return;
    }
    if (result[level] === undefined) {
      result[level] = [];
    }
    result[level].push(root.val);
    preOrderTraversal(root.left, level+1);
    preOrderTraversal(root.right, level+1);
  }

  preOrderTraversal(root, 0);

  return result;
};
