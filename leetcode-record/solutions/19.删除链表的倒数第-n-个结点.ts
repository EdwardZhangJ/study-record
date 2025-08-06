/*
 * @lc app=leetcode.cn id=19 lang=typescript
 *
 * [19] 删除链表的倒数第 N 个结点
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

function removeNthFromEnd(head: ListNode | null, n: number): ListNode | null {
  //  删除链表的倒数第 N 个结点
  // 等价于 删除链表正数 head 链表第 length - N + 1
  /* const dummy_node = new ListNode(-1, head)
  const getLength = (head: ListNode | null): number => {
    let len = 0
    while (head != null) {
      ++len
      head = head.next
    }
    return len
  }
  const listLen = getLength(head)
  let preNode = dummy_node
  for (let i = 1; i < listLen - n + 1; i++) {
    preNode = preNode.next
  }
  preNode.next = preNode.next.next
  return dummy_node.next */

  // 使用双指针法，
  const dummy_node = new ListNode(-1, head)
  let left = dummy_node
  let right = dummy_node
  while (n--) {
    right = right.next
  }
  while (right.next) {
    left = left.next
    right = right.next
  }
  left.next = left.next.next
  return dummy_node.next
}
// @lc code=end
