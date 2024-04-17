# JavaScript Basic: 内置对象 - [Map](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Map)

## Map

### 描述

对象是键值对的集合。Map 中的一个键只能出现一次；它在 Map 的集合中是独一无二的。Map 对象按键值对迭代——一个 for...of 循环在每次迭代后会返回一个形式为 [key, value] 的数组。迭代按插入顺序进行，即键值对按 set() 方法首次插入到集合中的顺序（也就是说，当调用 set() 时，map 中没有具有相同值的键）进行迭代。

### Object 和 Map 的比较

- 意外的键
  - Map 默认不包含任何键，只包含显式存入的键值对
  - Object 有原型，包含默认的键。可能会与自己的键相冲突（可以通过使用Object.create(null)绕过）
- 安全性
  - Map 可以安全地与用户提供的键值一起使用
  - Object 设置用户提供的键值对可能会允许攻击者覆盖对象的原型，可能导致`对象注入攻击`
- 键的类型
  - Map 的键可以是任何类型，包括函数、对象、基本类型
  - Object 的键只能是 String 或 Symbol
- 键的顺序
  - Map 中的键以简单、直接的方式排序；Map对象按照插入的顺讯迭代条目、键和值
  - 没有单一机制可以迭代对象的所有属性，各种机制包含不同的属性子集（for-in 仅包含可枚举的字符串键属性；Object.keys 仅包含可枚举的自由字符串键属性；Object.getOwnPropertyNames 包含自由的字符串键属性，即使是不可枚举的；Object.getOwnPropertySymbols 仅对 Symbol 键属性执行相同的操作）
- 大小
  - Map 的大小可以通过 size 属性轻松获取
  - Object 的项目数量确定更麻烦，效率也较低。一般通过获取 Object.keys(obj).length 返回的数组的长度
- 迭代
  - 是可迭代对象，可以直接迭代
  - Object 不是可迭代对象，需要通过 Object.keys 或 Object.entries 转换为可迭代对象；for...in 语句允许迭代对象的可枚举属性
- 性能
  - Map在涉及频繁添加和删除键值对的场景下性能更好
  - 未针对频繁添加和删除键值对进行优化
- 序列化和解析
  - 没有对序列化或解析的原生支持（可以通过使用 JSON.stringify() 及其replacer参数和 JSON.parse() 及其reviver参数为 Map 构建自己的序列化和解析支持）
  - 原生支持使用 JSON.stringify 和 JSON.parse

### 设置对象属性

## 实例方法

- Map.prototype.keys()

返回一个新的迭代器对象，其中包含 Map 对象中的按插入顺序插入的所有键的值。
