/*
 * @lc app=leetcode.cn id=205 lang=typescript
 *
 * [205] 同构字符串
 */

// @lc code=start
function isIsomorphic(s: string, t: string): boolean {
  const len = s.length

  if (len !== t.length) return false

  const s2tMap = new Map<string, string>()
  const t2sMap = new Map<string, string>()
  for (let i = 0; i < len; i++) {
    const sWord = s[i],
      tWord = t[i]
    if ((t2sMap.get(tWord) && sWord !== t2sMap.get(tWord)) || (s2tMap.get(sWord) && tWord !== s2tMap.get(sWord))) {
      return false
    }

    s2tMap.set(sWord, tWord)
    t2sMap.set(tWord, sWord)
  }

  return true

  // 字符串链式调用
  // return [...s].every((_, i) => s.indexOf(s[i]) === t.indexOf(t[i]));
}
// @lc code=end
