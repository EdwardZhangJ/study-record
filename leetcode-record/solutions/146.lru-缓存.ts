/*
 * @lc app=leetcode.cn id=146 lang=typescript
 *
 * [146] LRU 缓存
 */

// @lc code=start
class LRUCache {
  capacity: number
  map: Map<number, number> = new Map()

  constructor(capacity: number) {
    // 利用迭代器实现
    this.map = new Map()
    // 设置缓存最大个数
    this.capacity = capacity
  }

  get(key: number): number {
    if (this.map.has(key)) {
      let keyValue = this.map.get(key)
      if (keyValue != undefined) {
        this.map.delete(key)
        this.map.set(key, keyValue)
        return keyValue
      }
    }
    return -1
  }

  put(key: number, value: number): void {
    if (this.map.has(key)) {
      this.map.delete(key)
    }
    this.map.set(key, value)

    if (this.map.size > this.capacity) {
      this.map.delete(this.map.keys().next().value)
    }
  }
}

/**
 * Your LRUCache object will be instantiated and called as such:
 * var obj = new LRUCache(capacity)
 * var param_1 = obj.get(key)
 * obj.put(key,value)
 */
// @lc code=end
