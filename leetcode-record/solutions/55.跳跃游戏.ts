/*
 * @lc app=leetcode.cn id=55 lang=typescript
 *
 * [55] 跳跃游戏
 */

// @lc code=start
function canJump(nums: number[]): boolean {
  let step = 1;
  // 从后往前遍历
  // step表示当前能跳的步数
  // 如果当前的值小于step，说明可以跳到当前的位置
  // 如果当前的值大于等于step，说明不能跳到当前的位置
  // 所以需要将step重置为1
  // 如果最后的step等于1，说明可以跳到最后的位置
  /**
   * 
  for (let i = nums.length - 2; i >= 0; i--) {
    if (nums[i] < step) {
      step++
    } else {
      step = 1;
    }

  }

  return step === 1;
   */

  // deepseek 优化
  let maxReach = 0;
  const n = nums.length;

  for (let i = 0; i < n; i++) {
    // 如果当前的位置大于最大可达位置，说明不能跳到当前的位置
    if (i > maxReach) {
      return false;
    }
    // 更新最大可达位置
    // i + nums[i]表示当前的位置加上当前的值
    maxReach = Math.max(maxReach, i + nums[i]);

    // 如果最大可达位置大于等于最后的位置，说明可以跳到最后的位置
    if (maxReach >= n - 1) {
      return true;
    }
  }

  return false

};
// @lc code=end

