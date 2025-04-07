/*
 * @lc app=leetcode.cn id=27 lang=typescript
 *
 * [27] 移除元素
 */

// @lc code=start
function removeElement(nums: number[], val: number): number {
  const n = nums.length;
  let slow = 0, fast = n - 1;

  let count  = 0;
  while (slow <= fast) {
    if (nums[slow] === val) {
      count++;
      nums[slow] = nums[fast];
      fast--;
    } else {
      slow++;
    }


  }
  return n - count;
  
};
// @lc code=end

