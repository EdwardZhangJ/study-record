# JavaScript Basic: 内置对象 - [Map](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Set)

## 描述

`Set`对象是值的合集`collection` 。集合`set`中的元素只会出现一次，即集合中的元素是唯一的。可以按照插入顺序迭代集合中的元素。插入顺序对应于`add()`方法成功将每一个元素插入到集合中（即，调用`add()`方法时集合中不存在相同的元素）的顺序

`has()`方法检查某个值是否在集合中，其采用的方式的平均时间比逐个测试先前添加到集合中的元素更快。特别是当一个数组的长度`length`等于集合的大小`size`时，这比`Array.prototype.includes`方法的平均速度更快

## 实例属性

- Set.prototype.constructor

创建示例对象的构造函数。对于 Set 实例，其初始值为 Set 构造函数。

- Set.prototype.size
