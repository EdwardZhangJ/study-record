/*
 * @lc app=leetcode.cn id=125 lang=typescript
 *
 * [125] 验证回文串
 */

// @lc code=start
function isPalindrome(s: string): boolean {
  // 方法一： 简单粗暴直接替换 进行反转比较
  // return s.replace(/[^a-zA-Z0-9]/g, '').toLowerCase() === s.replace(/[^a-zA-Z0-9]/g, '').toLowerCase().split('').reverse().join('')
  // 方法二： 使用双指针进行判断

  const str = s.replace(/[^a-zA-Z0-9]/g, "").toUpperCase();
  if (!str) return true;

  let left = 0;
  let right = str.length - 1;
  while (left <= right) {


    if (str[left] !== str[right]) {
      return false
    } else {
      left++;
      right--;
    }

  }
  return true

};
// @lc code=end

