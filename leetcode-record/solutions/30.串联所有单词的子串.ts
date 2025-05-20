/*
 * @lc app=leetcode.cn id=30 lang=typescript
 *
 * [30] 串联所有单词的子串
 */

// @lc code=start
function findSubstring(s: string, words: string[]): number[] {
  let result: number[] = []
  if (words.length === 0) return result

  const sLen = s.length
  const wordNum = words.length
  const wordLen = words[0].length
  const wordsLen = wordLen * wordNum

  if (wordsLen > sLen) return result

  const wordMap = new Map<string, number>()
  for (const word of words) {
    wordMap.set(word, (wordMap.get(word) || 0) + 1)
  }

  for (let i = 0; i < wordLen; i++) {
    let left = i,
      valid = 0
    let window = new Map<string, number>()

    for (let right = i; right + wordLen <= sLen; right += wordLen) {
      let currStr = s.substring(right, right + wordLen)
      if (wordMap.has(currStr)) {
        window.set(currStr, (window.get(currStr) || 0) + 1)
        if (window.get(currStr) === wordMap.get(currStr)) {
          valid++
        }
      }
      // 开始移动窗口
      if (right + wordLen - left === wordsLen) {
        // 只有valid 有效计数和wordMap中数据一致时，当前left满足要求
        if (valid === wordMap.size) {
          result.push(left)
        }
        let deleStr = s.substring(left, left + wordLen)
        left += wordLen

        if (wordMap.has(deleStr)) {
          if (window.get(deleStr) === wordMap.get(deleStr)) {
            valid--
          }

          window.set(deleStr, (window.get(deleStr) || 0) - 1)
        }
      }
    }
  }
  return result
}
// @lc code=end
