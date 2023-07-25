/*
 * @lc app=leetcode.cn id=26 lang=typescript
 *
 * [26] 删除有序数组中的重复项
 */

// @lc code=start
function removeDuplicates(nums: number[]): number {
  const n = nums.length
  if(n <= 1) return n

  let first = 1, last = 1
  while(last < n) {
    if(nums[last] !== nums[first-1]) {
      nums[first] = nums[last]
      ++first
    }
    ++last
  }
  return first
};
// @lc code=end

