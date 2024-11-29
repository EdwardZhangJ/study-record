/*
 * @lc app=leetcode.cn id=101 lang=typescript
 *
 * [101] 对称二叉树
 */

// @lc code=start
/**
 * Definition for a binary tree node.
 * class TreeNode {
 *     val: number
 *     left: TreeNode | null
 *     right: TreeNode | null
 *     constructor(val?: number, left?: TreeNode | null, right?: TreeNode | null) {
 *         this.val = (val===undefined ? 0 : val)
 *         this.left = (left===undefined ? null : left)
 *         this.right = (right===undefined ? null : right)
 *     }
 * }
 */

// 对称树，需要满足，左子树的左节点 = 右子树的右节点，左子树的右节点 = 右子树的左节点
function isSymmetric(root: TreeNode | null): boolean {
  // 1. 递归
  // const checkNode = (leftTree: TreeNode | null, rightTree: TreeNode | null): boolean => {
  //   // 如果左右两个树节点都是 null，那么是对称的
  //   if (leftTree === null && rightTree === null) return true
  //   // 如果左右两个树节点有一个是 null，那么不对称
  //   if (!leftTree || !rightTree) return false

  //   return leftTree.val === rightTree.val && checkNode(leftTree.left, rightTree.right) && checkNode(leftTree.right, rightTree.left)


  // }

  // return checkNode(root.left, root.right)

  // 2. 迭代

};
// @lc code=end

