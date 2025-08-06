/*
 * @lc app=leetcode.cn id=290 lang=typescript
 *
 * [290] 单词规律
 */

// @lc code=start
function wordPattern(pattern: string, s: string): boolean {
  const len = pattern.length
  const words = s.split(' ')

  if (len !== words.length) return false

  const alph2WordMap = new Map<string, string>()
  const word2AlphMap = new Map<string, string>()

  for (const [key, value] of words.entries()) {
    const alph = pattern[key]

    // 判断相互转换的 map 中数是否存在 且是否相等
    if (
      (alph2WordMap.get(alph) && alph2WordMap.get(alph) !== value) ||
      (word2AlphMap.get(value) && word2AlphMap.get(value) !== alph)
    ) {
      return false
    }

    alph2WordMap.set(alph, value)
    word2AlphMap.set(value, alph)
  }
  return true
}
// @lc code=end
