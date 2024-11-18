/*
 * @lc app=leetcode.cn id=80 lang=typescript
 *
 * [80] 删除有序数组中的重复项 II
 */

// @lc code=start
function removeDuplicates(nums: number[]): number {
  const n = nums.length
  if(n <= 2) return n
  let first = 0, next = 1
  while(next < n) {
    if(nums[next] !== nums[first-1]) {
      nums[++first] = nums[next]
    }

    next++
  }
  return first
};
// @lc code=end

