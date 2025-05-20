/*
 * @lc app=leetcode.cn id=68 lang=typescript
 *
 * [68] 文本左右对齐
 */

// @lc code=start
function fullJustify(words: string[], maxWidth: number): string[] {
  // 1. 首先确定 每行最多可以放置的单词数量，在去确定每行的空格数量
  // 分以下三种情况讨论：
  // 1. 当前行是最后一行：单词左对齐，且单词之间应只有一个空格，在行末填充空格
  // 2. 当前行不是最后一行，且只有一个单词：该单词左对齐，在行末填充
  // 3. 当前行不是最后一行，且有多个单词：单词之间平均分配空格，最后一个单词后不填充空格

  const fillBlank = (n: number): string => {
    return ' '.repeat(n)
  }


  const ans: string[] = []
  let right = 0, n = words.length

  while (right < n) {
    const left = right;
    let sumLen = 0;
    while (right < n && sumLen + words[right].length + right - left <= maxWidth) {
      // 获取当前行的第一个单词在words 中的索引
      sumLen += words[right].length;
      right++;
    }

    // 当前行是最后一行
    if (right === n) {
      const s = words.slice(left).join(' ')
      ans.push(s + fillBlank(maxWidth - s.length))
      break
    }

    const numWords = right - left
    const numSpaces = maxWidth - sumLen

    // 当前行只有一个单词
    if (numWords === 1) {
      ans.push(words[left] + fillBlank(numSpaces))
      continue
    }
    // 当前行有多个单词
    const avgSpaces = Math.floor(numSpaces / (numWords - 1))
    const extraSpace = numSpaces % (numWords - 1)
    const s1 = words.slice(left, left + extraSpace + 1).join(fillBlank(avgSpaces + 1))
    const s2 = words.slice(left + extraSpace + 1, right).join(fillBlank(avgSpaces))
    ans.push(s1 + fillBlank(avgSpaces) + s2)
  }


  return ans

};



// @lc code=end

