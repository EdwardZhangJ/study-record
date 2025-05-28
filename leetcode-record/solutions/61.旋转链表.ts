/*
 * @lc app=leetcode.cn id=61 lang=typescript
 *
 * [61] 旋转链表
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

function rotateRight(head: ListNode | null, k: number): ListNode | null {
  if (k === 0 || !head || !head.next) return head

  let len = 1
  let cur = head
  while (cur.next) {
    cur = cur.next
    len++
  }

  // 需要找到 进行分段的 splitN;
  // k % len 表示实际需要旋转的 k值，len - (k % len) 表示实际需要分度的位置
  let splitN = len - (k % len)
  if (splitN === len) {
    return head
  }

  cur.next = head
  while (splitN) {
    cur = cur.next
    splitN--
  }

  // 找打哦新的链表头
  const res = cur.next
  // 断开链表后续连接
  cur.next = null
  return res
}
// @lc code=end
