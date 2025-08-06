/*
 * @lc app=leetcode.cn id=219 lang=typescript
 *
 * [219] 存在重复元素 II
 */

// @lc code=start
function containsNearbyDuplicate(nums: number[], k: number): boolean {
  // hash
  /* if (k === 0) return false
  const numMap = new Map<number, number>()
  for (let i = 0; i < nums.length; i++) {
    const num = nums[i]
    if (numMap.has(num) && i - Number(numMap.get(num)) <= k) {
      return true
    }
    numMap.set(num, i)
  }
  return false */
  //  滑动窗口方法
  const numSet = new Set<number>()

  for (let i = 0; i < nums.length; i++)  {
    if (i > k) {
      numSet.delete(nums[i - k - 1])
    }

    if (numSet.has(nums[i])) {
      return true
    }
    numSet.add(nums[i])
  }
  return false
}
// @lc code=end
