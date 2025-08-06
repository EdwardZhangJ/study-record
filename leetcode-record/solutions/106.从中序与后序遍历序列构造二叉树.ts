/*
 * @lc app=leetcode.cn id=106 lang=typescript
 *
 * [106] 从中序与后序遍历序列构造二叉树
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

function buildTree(inorder: number[], postorder: number[]): TreeNode | null {
  const n = inorder.length
  if (n === 0) return null

  const map = new Map()
  for (let i = 0; i < inorder.length; i++) {
    map.set(inorder[i], i)
  }

  const dps = (pStart: number, pEnd: number, iStart: number, iEnd: number) => {
    if (pStart > pEnd) return null
    let rootVal = postorder[pEnd]
    let root = new TreeNode(rootVal)
    let mid = map.get(rootVal)
    let leftNum = mid - iStart
    root.left = dps(pStart + 1, pStart + leftNum, iStart, mid - 1)
    root.right = dps(pStart + leftNum + 1, pEnd, mid + 1, iEnd)

    return root
  }
  return dps(0, postorder.length - 1, 0, inorder.length - 1)
}
// @lc code=end
