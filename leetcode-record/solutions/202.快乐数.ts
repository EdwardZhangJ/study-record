/*
 * @lc app=leetcode.cn id=202 lang=typescript
 *
 * [202] 快乐数
 */

// @lc code=start
function isHappy(n: number): boolean {
  // 使用hash 方法
  /* const calculateNum = (num: number) => {
    let sum = 0
    while (num > 0) {
      const pos = num % 10
      num = Math.floor(num / 10)
      sum += pos * pos
    }
    return sum
  }

  const set = new Set()

  while (n !== 1) {
    n = calculateNum(n)
    if (set.has(n)) return false
    set.add(n)
  }

  return n === 1 */

  // 双指针法
  const getNext = (num: number) => {
    let sum = 0
    while (num > 0) {
      sum += (num % 10) ** 2
      num = Math.floor(num / 10)
    }
    return sum
  }

  let slow = n,
    fast = getNext(n)

  while (fast != 1) {
    slow = getNext(slow)
    fast = getNext(getNext(fast))

    if (slow === fast) return false
  }

  return true
}
// @lc code=end
