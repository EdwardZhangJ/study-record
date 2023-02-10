/*
 * @lc app=leetcode.cn id=5 lang=typescript
 *
 * [5] 最长回文子串
 */

// @lc code=start
function longestPalindrome(s: string): string {
  if (s.length < 2) {
    return s
  }
  let result = ''
  let len = s.length
  for (let i = 0; i < len; i++) {
    handleFun(i, i)
    handleFun(i, i + 1)
  }
  function handleFun(m: number, n: number) {
    while (m >= 0 && n < len && s[m] == s[n]) {
      m--
      n++
    }
    // 注意此处m,n的值循环完后  是恰好不满足循环条件的时刻 如果此轮询得到回文串长度大于之前记录， 记录此轮循边界
    if (n - m - 1 > result.length) {
      result = s.slice(m + 1, n)
    }
  }
  return result
};
// @lc code=end

