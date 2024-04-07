/*
 * @lc app=leetcode.cn id=49 lang=typescript
 *
 * [49] 字母异位词分组
 */

// @lc code=start
function groupAnagrams(strs: string[]): string[][] {

  // method one: sort
  const map = new Map<string, string[]>()
  for (let str of strs) {
    const array = Array.from(str)
    array.sort()
    let key = array.toString()
    let list = map.get(key) ? map.get(key) : new Array<string>()
    if (list) {
      list.push(str)
      map.set(key, list)
    }
  }
  return Array.from(map.values())
};
// @lc code=end

