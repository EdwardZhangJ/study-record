/*
 * @lc app=leetcode.cn id=150 lang=typescript
 *
 * [150] 逆波兰表达式求值
 */

// @lc code=start
function evalRPN(tokens: string[]): number {
  const n = tokens.length
  if (n === 0) return 0
  if (n === 1) return Number(tokens[0])

  const operate = ['+', '-', '*', '/']
  const stack: number[] = []

  for (let i = 0; i < n; i++) {
    if (operate.includes(tokens[i])) {
      if (stack.length) {
        const first = Number(stack.pop())
        const second = Number(stack.pop())

        switch (tokens[i]) {
          case '+':
            stack.push(second + first)
            break
          case '-':
            stack.push(second - first)
            break
          case '*':
            stack.push(second * first)
            break
          case '/':
            stack.push(Math.trunc(second / first))
            break
        }
      }
    } else {
      stack.push(Number(tokens[i]))
    }
  }
  return stack[0]
}
// @lc code=end
