/*
 * @lc app=leetcode.cn id=167 lang=typescript
 *
 * [167] 两数之和 II - 输入有序数组
 */

// @lc code=start
function twoSum(numbers: number[], target: number): number[] {
  const n = numbers.length
  if (n === 2) { return [1, 2] }

  let start = 0, end = n - 1

  while (start < end) {
    const sum = numbers[start] + numbers[end]
    if (sum === target) {
      return [start + 1, end + 1]
    }
    if (sum > target) {
      end--
    } else {
      start++
    }
  }
  return [-1, -1]
};
// @lc code=end

