/*
 * @lc app=leetcode.cn id=57 lang=typescript
 *
 * [57] 插入区间
 */

// @lc code=start
function insert(intervals: number[][], newInterval: number[]): number[][] {
  if (intervals.length === 0) return [newInterval]
  if (newInterval.length === 0) return intervals

  const result: number[][] = []
  let i = 0
  const len = intervals.length
  while (i < len && intervals[i][1] < newInterval[0]) {
    result.push(intervals[i])
    i++
  }

  while (i < len && intervals[i][0] <= newInterval[1]) {
    newInterval[0] = Math.min(intervals[i][0], newInterval[0])
    newInterval[1] = Math.max(intervals[i][1], newInterval[1])
    i++
  }

  result.push(newInterval)

  while (i < len) {
    result.push(intervals[i])
    i++
  }

  return result
}

// @lc code=end
