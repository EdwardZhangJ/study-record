/*
 * @lc app=leetcode.cn id=56 lang=typescript
 *
 * [56] 合并区间
 */

// @lc code=start
function merge(intervals: number[][]): number[][] {

  // 1. 按照区间的左端点排序
  intervals.sort((a, b) => a[0] - b[0])

  // 2. 遍历区间
  const ans: number[][] = []
  for (const p of intervals) {
    const m = ans.length
    if (m && ans[m - 1][1] >= p[0]) { // 满足条件，合并区间
      ans[m - 1][1] = Math.max(ans[m - 1][1], p[1])
    } else {
      ans.push(p)
    }
  }

  return ans
};
// @lc code=end

