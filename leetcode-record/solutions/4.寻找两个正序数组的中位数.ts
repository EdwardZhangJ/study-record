/*
 * @lc app=leetcode.cn id=4 lang=typescript
 *
 * [4] 寻找两个正序数组的中位数
 */

// @lc code=start
function findMedianSortedArrays(nums1: number[], nums2: number[]): number {
  function getKth(nums1: number[], start1: number, end1: number, nums2: number[], start2: number, end2: number, k: number): number {
    const len1 = end1 - start1 + 1
    const len2 = end2 - start2 + 1

    if (len1 > len2) return getKth(nums2, start2, end2, nums1, start1, end1, k)
    if (len1 === 0) return nums2[start2 + k - 1]
    if (k == 1) return Math.min(nums1[start1], nums2[start2])

    const i = start1 + Math.min(len1, Math.floor(k / 2)) - 1
    const j = start2 + Math.min(len2, Math.floor(k / 2)) - 1

    if (nums1[i] > nums2[j]) {
      return getKth(nums1, start1, end1, nums2, j + 1, end2, k - (j - start2 + 1))
    } else {
      return getKth(nums1, i + 1, end1, nums2, start2, end2, k - (i - start1 + 1))
    }
  }
  const n = nums1.length
  const m = nums2.length
  let left = (n + m + 1) / 2
  let right = (n + m + 2) / 2
  return (getKth(nums1, 0, n - 1, nums2, 0, m - 1, left) + getKth(nums1, 0, n - 1, nums2, 0, m - 1, right)) / 2

};
// @lc code=end

