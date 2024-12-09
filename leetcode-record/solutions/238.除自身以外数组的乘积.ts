/*
 * @lc app=leetcode.cn id=238 lang=typescript
 *
 * [238] 除自身以外数组的乘积
 */

// @lc code=start
function productExceptSelf(nums: number[]): number[] {

  // 左右乘积列表 空间复杂度O(N)
  const len = nums.length

  // const left = new Array(len)
  // const right = new Array(len)
  const result = new Array(len)

  // left[0] = 1
  // for (let i = 1; i < len; i++) {
  //   left[i] = left[i - 1] * nums[i - 1]
  // }

  // right[len - 1] = 1
  // for (let i = len - 2; i >= 0; i--) {
  //   right[i] = right[i + 1] * nums[i + 1]
  // }

  // for (let i = 0; i < len; i++) {
  //   result[i] = left[i] * right[i]
  // }


  // 左右乘积列表: 仅定义一个结果数组 result[i] 空间复杂度O(1)

  result[0] = 1
  for (let i = 1; i < nums.length; i++) {
    // result[i] 表示索引i左侧的乘积
    result[i] = result[i - 1] * nums[i - 1]
  }

  let R = 1
  for (let i = len - 1; i >= 0; i--) {
    // R 为右侧所有元素的乘积
    result[i] = result[i] * R
    R *= nums[i]
  }

  return result

};
// @lc code=end

