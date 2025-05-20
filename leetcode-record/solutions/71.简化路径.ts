/*
 * @lc app=leetcode.cn id=71 lang=typescript
 *
 * [71] 简化路径
 */

// @lc code=start
function simplifyPath(path: string): string {
  const names = path.split('/')
  const stack: string[] = []
  if (names.length === 0) return ''
  for (const name of names) {
    if (name === '..') {
      if (stack.length) {
        stack.pop()
      }
    } else if (name.length && name !== '.') {
      stack.push(name)
    }
  }

  return '/' + stack.join('/')
}
// @lc code=end
