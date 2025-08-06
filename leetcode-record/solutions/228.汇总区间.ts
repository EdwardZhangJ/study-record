/*
 * @lc app=leetcode.cn id=228 lang=typescript
 *
 * [228] 汇总区间
 */

// @lc code=start
function summaryRanges(nums: number[]): string[] {
  const result: string[] = []
  const n = nums.length
  if (n === 1) {
    result.push(nums[0] + '')
    return result
  }

  let index = 0
  while (index < n) {
    const low = index
    index++

    while (index < n && nums[index] === nums[index - 1] + 1) {
      index++
    }

    const high = index - 1
    const temp = ['' + nums[low]]
    if (low < high) {
      temp.push('->')
      temp.push('' + nums[high])
    }
    result.push(temp.join(''))
  }

  return result
}
// @lc code=end
