/*
 * @lc app=leetcode.cn id=128 lang=typescript
 *
 * [128] 最长连续序列
 */

// @lc code=start
function longestConsecutive(nums: number[]): number {

  // method: hash Set方法
  const set = new Set(nums)
  let longsetStreak = 0
  for (const num of set) {
    // 如果当前数字的前一个数字不存在，那么就可以开始计算当前数字的连续序列
    if (!set.has(num - 1)) {
      let currentNum = num
      let currentStreak = 1

      // 如果当前数字的下一个数字存在，那么就继续计算连续序列
      while (set.has(currentNum + 1)) {
        currentNum += 1
        currentStreak += 1
      }
      longsetStreak = Math.max(longsetStreak, currentStreak)
    }
  }
  return longsetStreak
};
// @lc code=end

