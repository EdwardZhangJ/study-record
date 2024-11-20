/*
 * @lc app=leetcode.cn id=206 lang=typescript
 *
 * [206] 反转链表
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

function reverseList(head: ListNode | null): ListNode | null {
    // 1. 迭代
    // let prev = null
    // let curr = head

    // while(curr) {
    //   let next = curr.next
    //   curr.next = prev
    //   prev = curr
    //   curr = next
    // }

    // return prev

    // 2. 递归
    // 期望 reverseList 函数能够返回新的头节点 
    // 需要 n(k+1) 的下一个节点指向 n(k)
    
    if(head == null || head.next == null) return head

    const newHeader = reverseList(head.next)
    
    head.next.next = head
    head.next = null
​
    return newHeader
};
// @lc code=end

