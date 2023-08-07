/*
 * @lc app=leetcode.cn id=739 lang=typescript
 *
 * [739] 每日温度
 */

// @lc code=start
function dailyTemperatures(temperatures: number[]): number[] {
  const n = temperatures.length
  const res = new Array(n).fill(0)
  const stack: number [] = []
  // 从后向前遍历，
  for(let i = n - 1; i >= 0; i--) {
    // 如果当前温度大于栈顶温度，出栈
    while(stack.length && temperatures[i] >= temperatures[stack[stack.length - 1]]) {
      stack.pop()
    }
    // 如果栈不为空，说明栈顶元素是第一个比当前温度高的元素
    if(stack.length) {
      res[i] = stack[stack.length - 1] - i
    }
    // 当前元素入栈
    stack.push(i)
  }
  return res
};
// @lc code=end

