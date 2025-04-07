/*
 * @lc app=leetcode.cn id=49 lang=typescript
 *
 * [49] 字母异位词分组
 */

// @lc code=start
function groupAnagrams(strs: string[]): string[][] {

  // method one: sort
  // n 是 strs 的数量，k 是 strs 中字符串的最大长度
  // time complexity: O(n * k * logk)
  // space complexity: O(n * k)
  // const map = new Map<string, string[]>()
  // for (let str of strs) {
  //   const array = Array.from(str)
  //   array.sort()
  //   let key = array.toString()
  //   let list = map.get(key) ? map.get(key) : new Array<string>()
  //   if (list) {
  //     list.push(str)
  //     map.set(key, list)
  //   }
  // }ß
  // return Array.from(map.values())

  // method two: countß
  const map: any = new Object()
  for (let str of strs) {
    const count = new Array(26).fill(0)
    for (let letter of str) {
      count[letter.charCodeAt(0) - 'a'.charCodeAt(0)]++
    }

    let index = count.toString()
    map[index] ? map[index].push(str) : map[index] = [str]
  }
  return Object.values(map)
};
// @lc code=end

