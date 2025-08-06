/*
 * @lc app=leetcode.cn id=274 lang=typescript
 *
 * [274] H 指数
 */

// @lc code=start
function hIndex(citations: number[]): number {

  // 1. 排序法 时间 O(nlogn) 空间 O(log n)
  // citations.sort((a, b) => a - b);

  // let h = 0, n = citations.length - 1;
  // // 根据排序完后的数组，h的值是从后往前查找的
  // // 例如 [0, 1, 3, 5, 6] h=3
  // // 如果 citations[n] > h，说明有n+1个论文引用数大于h
  // while (n >= 0 && citations[n] > h) {
  //   h++;
  //   n--;
  // }

  // return h

  // 2. 计数排序法
  let n = citations.length, tot = 0;
  const counts = new Array(n + 1).fill(0);
  for (const element of citations) {
    // 仅判断 引用数大于n的论文，并将值累加给 counts[n]
    if (element >= n) {
      counts[n]++;
    } else {
      counts[element]++;
    }
  }

  for (let i = n; i >= 0; --i) {
    tot += counts[i];
    if(tot >= i){
      // 判断当前的h值是否大于等于i
      return i;
    }
  }
  return 0

};
// @lc code=end
