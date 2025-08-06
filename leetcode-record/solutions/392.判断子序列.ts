/*
 * @lc app=leetcode.cn id=392 lang=typescript
 *
 * [392] 判断子序列
 */

// @lc code=start
function isSubsequence(s: string, t: string): boolean {
  // 方法一：双指针
  // let sPointer = 0, tPointer = 0;
  // const sLen = s.length, tLen = t.length;

  // while (sPointer < sLen && tPointer < tLen) {
  //   if (s[sPointer] === t[tPointer]) {
  //     sPointer++
  //   }
  //   tPointer++

  // }
  // return sPointer === sLen

  // 方法二：单指针优化
  let matchCount = 0;
  for (const char of t) {
    if (matchCount === s.length) break
    if (s[matchCount] === char) {
      matchCount++
    }
  }
  return matchCount === s.length
};
// @lc code=end

