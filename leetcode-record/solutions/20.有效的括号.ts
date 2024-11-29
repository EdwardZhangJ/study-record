/*
 * @lc app=leetcode.cn id=20 lang=typescript
 *
 * [20] 有效的括号
 */

// @lc code=start
function isValid(s: string): boolean {

  let stack: string[] = []
  const map = {
    ')': '(',
    ']': '[',
    '}': '{'
  }

  for (let index = 0; index < s.length; index++) {
    const element = s[index];
    if (element === '(' || element === '[' || element === '{') {
      stack.push(element)
    } else {
      if (stack.length === 0) {
        return false
      }
      const top = stack[stack.length - 1]
      if (map?.[element] === top) {
        stack.pop()
      } else {
        return false
      }
    }
  }

  return stack.length === 0
};
// @lc code=end

