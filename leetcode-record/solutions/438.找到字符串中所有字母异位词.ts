/*
 * @lc app=leetcode.cn id=438 lang=typescript
 *
 * [438] 找到字符串中所有字母异位词
 */

// @lc code=start
function findAnagrams(s: string, p: string): number[] {

  const slen = s.length, plen = p.length
  if (slen < plen) return []

  const ans: number[] = []
  const sCount = new Array(26).fill(0)
  const pCount = new Array(26).fill(0)

  for (let i = 0; i < plen; ++i) {
    ++sCount[s[i].charCodeAt(0) - 'a'.charCodeAt(0)]
    ++pCount[p[i].charCodeAt(0) - 'a'.charCodeAt(0)]

  }

  if (sCount.toString() === pCount.toString()) {
    ans.push(0);
  }

  for (let i = 0; i < slen - plen; ++i) {
    --sCount[s[i].charCodeAt(0) - 'a'.charCodeAt(0)];
    ++sCount[s[i + plen].charCodeAt(0) - 'a'.charCodeAt(0)];

    if (sCount.toString() === pCount.toString()) {
      ans.push(i + 1);
    }
  }



  return ans
};
// @lc code=end

