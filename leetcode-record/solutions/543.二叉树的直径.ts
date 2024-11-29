/*
 * @lc app=leetcode.cn id=543 lang=typescript
 *
 * [543] 二叉树的直径
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

function diameterOfBinaryTree(root: TreeNode | null): number {
  // 1. 深度优先搜索

  let ans = 1

  const depthSearch = (node: TreeNode | null): number => {
    if (node === null) return 0

    const left = depthSearch(node.left)
    const right = depthSearch(node.right)
    ans = Math.max(ans, left + right + 1)
    return Math.max(left, right) + 1
  }

  depthSearch(root)

  return ans - 1


};
// @lc code=end

