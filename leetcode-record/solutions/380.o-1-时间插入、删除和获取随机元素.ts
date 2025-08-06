/*
 * @lc app=leetcode.cn id=380 lang=typescript
 *
 * [380] O(1) 时间插入、删除和获取随机元素
 */

// @lc code=start
class RandomizedSet {
    nums: number[];
    map: Map<number, number>;

    constructor() {
        this.nums = [];
        this.map = new Map();
    }

    insert(val: number): boolean {
        if(this.map.has(val)) {
            return false
        }
        this.nums.push(val)
        this.map.set(val, this.nums.length - 1);
        return true
    }

    remove(val: number): boolean {
        if(!this.map.has(val)) {
            return false
        }
        // 交换删除元素和最后一个元素
        const index = this.map.get(val) || 0;
        // 交换位置
        this.nums[index]  = this.nums[this.nums.length - 1]
        this.map.set(this.nums[index], index)
        // 删除最后一个元素
        this.nums.pop();
        this.map.delete(val);
        return true
    }

    getRandom(): number {
        const radomIndex = Math.floor(Math.random() * this.nums.length)
        return this.nums[radomIndex]
    }
}

/**
 * Your RandomizedSet object will be instantiated and called as such:
 * var obj = new RandomizedSet()
 * var param_1 = obj.insert(val)
 * var param_2 = obj.remove(val)
 * var param_3 = obj.getRandom()
 */
// @lc code=end

