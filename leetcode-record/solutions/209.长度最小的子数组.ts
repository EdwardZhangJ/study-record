/*
 * @lc app=leetcode.cn id=209 lang=typescript
 *
 * [209] 长度最小的子数组
 */

// @lc code=start
function minSubArrayLen(target: number, nums: number[]): number {
  // 方法一：前缀和 + 二分查找 

  function binarySearch(a: number[], target) {
    let l = 0, r = a.length
    while (l < r) {
      let mid = (l + r) >> 1;
      if (a[mid] < target) {
        l = mid + 1;
      } else {
        r = mid;
      }
    }
    return a[l] >= target ? l : -1;
  }

  const n = nums.length
  if (n === 0) return 0
  if (n === 1) return nums[0] >= target ? 1 : 0
  let result = n + 1
  let sum: number[] = new Array(n + 1).fill(0)

  for (let i = 1; i <= n; i++) {
    sum[i] = sum[i - 1] + nums[i - 1]
  }

  for (let i = 1; i <= n; i++) {
    const endValue = target + sum[i - 1]
    let index = binarySearch(sum, endValue)
    if (index !== -1) {
      result = Math.min(result, index - (i - 1))
    }
  }

  return result === n + 1 ? 0 : result
  // 方法二：滑动窗口 O(n)
  /* const n = nums.length
  if (n === 0) return 0
  if (n === 1) return nums[0] >= target ? 1 : 0

  let left = 0, right = 0;
  let result = n + 1
  let sum = 0

  while (right < n) {
    sum += nums[right]
    // 判断和是否满足要求
    if (sum >= target) {
      while (sum - nums[left] >= target) {
        // 不断减小 左指针值，使得满足最小子数组要求
        sum -= nums[left]
        left++
      }
      result = Math.min(result, right - left + 1)
    }

    right++
  }
  return result === n + 1 ? 0 : result */
};
// @lc code=end



