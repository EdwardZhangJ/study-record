/*
 * @lc app=leetcode.cn id=3 lang=javascript
 *
 * [3] 无重复字符的最长子串
 */

// @lc code=start
/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function(s) {
  const n = s.length
  if(n <= 1) return n

  let left = 0, right = 0
  const strList = new Set()
  let maxLen = 0
  while(right < n) {
    if(!strList.has(s[right])) {
      maxLen = Math.max(maxLen, right - left + 1)
      strList.add(s[right])
      right++
    } else {
      strList.delete(s[left])
      left++
    }
  }
  return maxLen
};
// @lc code=end

