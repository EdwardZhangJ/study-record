/*
 * @lc app=leetcode.cn id=242 lang=typescript
 *
 * [242] 有效的字母异位词
 */

// @lc code=start
function isAnagram(s: string, t: string): boolean {
  // 使用 hash 基本解法
  /* if (s.length !== t.length) return false

  const letterMap = new Map<string, number>()
  for (let index = 0; index < s.length; index++) {
    const element = s[index]
    letterMap.set(element, (letterMap.get(element) || 0) + 1)
  }

  for (let index = 0; index < t.length; index++) {
    const element = t[index]
    if (!letterMap.get(element)) {
      return false
    }
    letterMap.set(element, (letterMap.get(element) || 0) - 1)
  }

  for (const [key, value] of letterMap) {
    if (value !== 0) {
      return false
    }
  }

  return true */

  if (s.length !== t.length) return false

  const charCounts = (str: string): number[] => {
    const counts = new Array<number>(26).fill(0)
    for (let i = 0; i < str.length; i++) {
      const code = str.charCodeAt(i) - 'a'.charCodeAt(0)
      counts[code] = counts[code] + 1
    }
    return counts
  }
  const sCount = charCounts(s)
  const tCount = charCounts(t)
  for (let i = 0; i < 26; i++) {
    if (sCount[i] !== tCount[i]) {
      return false
    }
  }

  return true
}
// @lc code=end
