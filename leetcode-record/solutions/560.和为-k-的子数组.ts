/*
 * @lc app=leetcode.cn id=560 lang=typescript
 *
 * [560] 和为 K 的子数组
 */

// @lc code=start
function subarraySum(nums: number[], k: number): number {

  /** 1. 枚举法 */
  // let count = 0;
  // for (let start = 0; start < nums.length; start++) {
  //   let sum = 0
  //   for (let end = start; end < nums.length; end++) {
  //     sum += nums[end]
  //     if (sum === k) {
  //       count++
  //     }
  //   }
  // }
  // return count

  /** 2. 前缀和 + 哈希表优化 */
  /**
   * 针对枚举法的优化，我们可以使用前缀和来优化，即 sum[i] 表示 [0, i] 的和，
   * 则 sum[i] = sum[i - 1] + nums[i]
   * 那么【i,...j】子数组的和为k 即 k = sum[i, j] = sum[j] - sum[i - 1]
   * 所以符合条件的下标 i, j 需要满足 sum[i - 1] = sum[j] - k
   * 
   **/
  const mp = new Map<number, number>()
  mp.set(0, 1)

  let count = 0, pre = 0
  for (const x of nums) {
    pre += x
    if (mp.has(pre - k)) {
      count += mp.get(pre - k) || 0
    }


    if (mp.has(pre)) {
      mp.set(pre, (mp.get(pre) || 0) + 1)
    } else {
      mp.set(pre, 1)
    }
  }
  return count
};
// @lc code=end

