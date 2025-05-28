/*
 * @lc app=leetcode.cn id=138 lang=typescript
 *
 * [138] 随机链表的复制
 */

// @lc code=start
/**
 * Definition for _Node.
 * class _Node {
 *     val: number
 *     next: _Node | null
 *     random: _Node | null
 *
 *     constructor(val?: number, next?: _Node, random?: _Node) {
 *         this.val = (val===undefined ? 0 : val)
 *         this.next = (next===undefined ? null : next)
 *         this.random = (random===undefined ? null : random)
 *     }
 * }
 */

function copyRandomList(head: _Node | null): _Node | null {
  if (!head) return null

  // 第一步：在每个原节点后面创建一个新节点
  let current: _Node | null = head
  while (current) {
    const newNode = new _Node(current.val)
    newNode.next = current.next
    current.next = newNode
    current = newNode.next
  }

  // 第二步：设置新节点的random指针
  current = head
  while (current) {
    if (current.random) {
      current.next!.random = current.random.next
    }
    current = current.next!.next
  }

  // 第三步：分离两个链表
  current = head
  const newHead = head.next
  let newCurrent = newHead
  while (current) {
    current.next = current.next!.next
    current = current.next
    if (newCurrent!.next) {
      newCurrent!.next = newCurrent!.next.next
      newCurrent = newCurrent!.next
    }
  }

  return newHead
}
// @lc code=end
