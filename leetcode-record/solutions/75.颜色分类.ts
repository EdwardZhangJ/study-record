/*
 * @lc app=leetcode.cn id=75 lang=typescript
 *
 * [75] 颜色分类
 */

// @lc code=start
/**
 Do not return anything, modify nums in-place instead.
 */
function sortColors(nums: number[]): void {
  // 双指针法去遍历数组
  // 在遍历的过程中，将 0 移动到数组的头部，将 2 移动到数组的尾部
  // 时间复杂度 O(n) 空间复杂度 O(1)
  // 当 num[i] = 2 时交换 i 和 p2的位置，p2--
  // 当 num[i] = 0 时交换 i 和 p0的位置，p0++
  const n = nums.length

  let p0 = 0, p2 = n - 1
  for (let i = 0; i <= p2; ++i) {
    while (i <= p2 && nums[i] === 2) {
      [nums[i], nums[p2]] = [nums[p2], nums[i]]
      --p2
    }

    if (nums[i] === 0) {
      [nums[i], nums[p0]] = [nums[p0], nums[i]]
      ++p0
    }
  }
};
// @lc code=end

