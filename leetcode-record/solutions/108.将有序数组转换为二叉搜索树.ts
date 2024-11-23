/*
 * @lc app=leetcode.cn id=108 lang=typescript
 *
 * [108] 将有序数组转换为二叉搜索树
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

function sortedArrayToBST(nums: number[]): TreeNode | null {
  //二叉搜索树的中序遍历是升序序列，题目给定的数组是按照升序排序的有序数组，因此可以确保数组是二叉搜索树的中序遍历序列
  // 1. 构建 二叉搜索树
  const buildTree = (data: number[], start: number, end: number) => {
    if (start > end) return null

    let mid = Math.floor((start + end) / 2)

    const root = new TreeNode(data[mid])

    root.left = buildTree(data, start, mid - 1)
    root.right = buildTree(data, mid + 1, end)

    return root
  }

  return buildTree(nums, 0, nums.length - 1)
};
// @lc code=end

