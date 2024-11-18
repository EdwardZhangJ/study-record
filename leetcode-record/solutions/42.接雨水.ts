/*
 * @lc app=leetcode.cn id=42 lang=typescript
 *
 * [42] 接雨水
 */

// @lc code=start
function trap(height: number[]): number {


  /**
   * 1. 动态规划解法
   * 核心： leftMax[i] = Math.max(leftMax[i-1], height[i])   1 <= i <= n-1
   * 核心： rightMax[i] = Math.max(rightMax[i+1], height[i])  0 <= i <= n-2
   * */

  // const n = height.length
  // if(n === 0) return 0

  // const leftMax = new Array(n).fill(0)
  // leftMax[0] = height[0]
  // for(let i = 1; i< n; ++i) {
  //   leftMax[i] = Math.max(leftMax[i-1], height[i])
  // }

  // const rightMax = new Array(n).fill(0)
  // rightMax[n-1] = height[n-1]
  // for(let i = n-2; i >= 0; --i) {
  //   rightMax[i] = Math.max(rightMax[i+1], height[i])
  // }

  // let ans = 0
  // for(let i = 0; i < n; ++i) {
  //   ans += Math.min(leftMax[i], rightMax[i]) - height[i]
  // }


  // return ans


  /**
   * 2. 单调栈解法
   * 核心：
   */
  let ans = 0

  const stack = []
  const n = height.length

  for(let i = 0; i < n; ++i) {
    while(stack.length && height[i] > height[stack[stack.length - 1]]) {

      const top = stack.pop()

      if(!stack.length) break

      const left = stack[stack.length - 1]
      const curWidth = i - left - 1
      const curHeight = Math.min(height[left], height[i]) - height[top]
      ans += curWidth * curHeight
    }
  }

  return ans
};
// @lc code=end

