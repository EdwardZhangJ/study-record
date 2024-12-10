/*
 * @lc app=leetcode.cn id=73 lang=typescript
 *
 * [73] 矩阵置零
 */

// @lc code=start
/**
 Do not return anything, modify matrix in-place instead.
 */
function setZeroes(matrix: number[][]): void {
  // 标记数组法 记录 0 的行和列 时间复杂度 O(MN) 空间复杂度O(M+N) M为行数 N为列数
  const m = matrix.length, n = matrix[0].length
  // const row = new Array(m).fill(false)
  // const col = new Array(n).fill(false)

  // for (let i = 0; i < m; i++) {
  //   for (let j = 0; j < n; j++) {
  //     if (matrix[i][j] === 0) {
  //       row[i] = col[j] = true
  //     }
  //   }
  // }

  // for (let i = 0; i < m; i++) {
  //   for (let j = 0; j < n; j++) {
  //     if (row[i] || col[j]) {
  //       matrix[i][j] = 0
  //     }
  //   }
  // }

  // 空间复杂度O(1)的方法
  // 使用 两个或者一个标记变量
  // 使用第一行和第一列作为标记数组
  // 使用两个标  flagCol0 和 flagRow0 分别标记第一列和第一行是否有 0
  let flagCol0 = false, flagRow0 = false
  for (let i = 0; i < m; i++) {
    if (matrix[i][0] === 0) {
      flagCol0 = true
    }
  }

  for (let j = 0; j < n; j++) {
    if (matrix[0][j] === 0) {
      flagRow0 = true
    }
  }

  // 从第二行第二列开始遍历
  // 使用第一行和第一列作为标记数组
  
  for (let i = 1; i < m; i++) {
    for (let j = 1; j < n; j++) {
      if (matrix[i][j] === 0) {
        matrix[i][0] = matrix[0][j] = 0
      }
    }
  }

  // 从第二行第二列开始遍历
  for (let i = 1; i < m; i++) {
    for (let j = 1; j < n; j++) {
      if (matrix[i][0] === 0 || matrix[0][j] === 0) {
        matrix[i][j] = 0
      }
    }
  }

  if(flagCol0){
    for (let i = 0; i < m; i++) {
      matrix[i][0] = 0
    }
  }
  if(flagRow0){
    for (let j = 0; j < n; j++) {
      matrix[0][j] = 0
    }
  }
};
// @lc code=end

