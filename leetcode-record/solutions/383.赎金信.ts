/*
 * @lc app=leetcode.cn id=383 lang=typescript
 *
 * [383] 赎金信
 */

// @lc code=start
function canConstruct(ransomNote: string, magazine: string): boolean {
  if (ransomNote.length > magazine.length) {
    return false
  }

  let flag = true

  if (ransomNote.length === 0) return flag

  const ranMap = new Map<string, number>()
  for (let i = 0; i < ransomNote.length; i++) {
    ranMap.set(ransomNote[i], (ranMap.get(ransomNote[i]) || 0) + 1)
  }

  const magMap = new Map<string, number>()
  for (let i = 0; i < magazine.length; i++) {
    magMap.set(magazine[i], (magMap.get(magazine[i]) || 0) + 1)
  }

  for (const [key, value] of ranMap) {
    if ((magMap.get(key) || 0) < value) {
      return false
    }
  }

  return flag
}
// @lc code=end
