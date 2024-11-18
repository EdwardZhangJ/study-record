/*
 * @lc app=leetcode.cn id=6 lang=typescript
 *
 * [6] N 字形变换
 */

// @lc code=start
function convert(s: string, numRows: number): string {
  const n = s.length, r = numRows;
  if(r === 1 || r >= n) {
    return s
  }
  return ''
};
// @lc code=end

