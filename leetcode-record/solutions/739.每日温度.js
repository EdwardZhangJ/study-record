/*
 * @lc app=leetcode.cn id=739 lang=javascript
 *
 * [739] 每日温度
 */

// @lc code=start
/**
 * @param {number[]} temperatures
 * @return {number[]}
 */
var dailyTemperatures = function(temperatures) {
    let res = new Array(temperatures.length).fill(0);
    let stack = [];
    for(let i=0; i<temperatures.length; i++) {
        while(stack.length && temperatures[i] > temperatures[stack[stack.length-1]]) {
            let topIndex = stack.pop();
            res[topIndex] = i - topIndex;
        }
        stack.push[i];
    }
    return res;
};
// @lc code=end

