/*
 * @lc app=leetcode.cn id=234 lang=typescript
 *
 * [234] 回文链表
 */

// @lc code=start
/**
 * Definition for singly-linked list.
 * class ListNode {
 *     val: number
 *     next: ListNode | null
 *     constructor(val?: number, next?: ListNode | null) {
 *         this.val = (val===undefined ? 0 : val)
 *         this.next = (next===undefined ? null : next)
 *     }
 * }
 */

function isPalindrome(head: ListNode | null): boolean {
  // 使用双指针法 空间复杂度 o(n)
  // let arr: number[] = []
  // while (head !== null) {
  //   arr.push(head.val)
  //   head = head.next
  // }

  // for (let i = 0, j = arr.length - 1; i < j; i++, j--) {
  //   if (arr[i] !== arr[j]) return false
  // };
  // return true

  return true
}
// @lc code=end

