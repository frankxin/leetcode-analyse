/**
 * Maximum Depth of Binary Tree
 * 
 * Given a binary tree, find its maximum depth.
 * 
 * The maximum depth is the number of nodes along the longest path 
 * from the root node down to the farthest leaf node.
 *
 * Author: Frankxin
 * Date: 2015.10.9
 */


/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number}
 */
var maxDepth = function(root) {
    if(root === undefined || root===null){
        return 0
    }
    return Math.max(maxDepth(root.left),maxDepth(root.right)) + 1
};