/*
 * @lc app=leetcode.cn id=118 lang=typescript
 *
 * [118] 杨辉三角
 */

// @lc code=start
function generate(numRows: number): number[][] {
  if (numRows === 0) return []
  if (numRows === 1) return [[1]]
  let ans: number[][] = []

  for (let i = 0; i < numRows; i++) {
    // 每行的数组 填充个数 i + 1
    const row = new Array(i + 1).fill(1)
    // 每行数组值的填充
    for (let j = 1; j < row.length - 1; j++) {
      row[j] = ans[i - 1][j - 1] + ans[i - 1][j]
    }
    ans.push(row)
  }
  return ans
};
// @lc code=end

