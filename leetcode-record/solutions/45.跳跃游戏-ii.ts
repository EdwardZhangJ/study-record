/*
 * @lc app=leetcode.cn id=45 lang=typescript
 *
 * [45] 跳跃游戏 II
 */

// @lc code=start
function jump(nums: number[]): number {
  // 1. 反向查找 时间 O(n^2) 空间 O(1)
  // let n = nums.length - 1;
  // let steps = 0
  // while (n > 0) {
  //   for (let i = 0; i < n; i++) {
  //     if (i + nums[i] >= n) {
  //       n = i;
  //       steps++;
  //       break;
  //     }
  //   }
  // }
  // return  steps;

  // 2. 正向查找 贪心算法 时间 O(n) 空间 O(1)
  let maxPos = 0, end = 0, steps = 0;
  for (let index = 0; index < nums.length - 1; ++index) {
    if (maxPos >= index) {
      // 更新最大跳跃位置
      // 例如 [2,3,1,1,4] 0->2->4
      maxPos = Math.max(maxPos, index + nums[index]);
      // 到达边界
      if (index === end) {
        end = maxPos
        ++steps
      }
    }
  }
  return steps

};
// @lc code=end

