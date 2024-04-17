# JavaScript Basic: 内置对象 - [Array](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Array)

## Array

### 描述

## 构造函数

## 属性

## 方法

### Array.from()

Array.from() 静态方法从可迭代或类数组对象创建一个新的浅拷贝的数组实例。

Array.from() 方法是一个通用的工厂方法。

转换异步的可迭代对象到数组，可以使用 Array.fromAsync()。

#### Array.from()语法

```javascript
Array.from(arrayLike)
Array.from(arrayLike, mapFn)
Array.from(arrayLike, mapFn, thisArg)
```

##### Array.from()参数

- arrayLike
  想要转换成数组的类数组或可迭代对象。

- mapFn: 调用数组每个元素的函数。如果提供，每个将要添加到数组中的值首先会传递给该函数，然后将 mapFn 的返回值增加到数组中。使用以下参数调用该函数
  - element: 数组当前正在处理的元素。
  - index: 数组当前正在处理的元素的索引

- thisArg: 可选参数，执行 mapFn 函数时 this 的值。

##### Array.from()返回值

一个新的 Array 实例。

#### Array.from()示例

- 序列生成器
  
```javascript
// 序列生成器函数（通常称为“range”，例如 Clojure、PHP 等）
const range = (start, stop, step) =>
  Array.from({ length: (stop - start) / step + 1 }, (_, i) => start + i * step);

// 生成的数字范围 0..4
range(0, 4, 1);
// [0, 1, 2, 3, 4]

// 生成的数字范围 1..10，步长为 2
range(1, 10, 2);
// [1, 3, 5, 7, 9]

// 使用 Array.from 生成字母表，并将其序列排序
range("A".charCodeAt(0), "Z".charCodeAt(0), 1).map((x) =>
  String.fromCharCode(x),
);
// ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"]

```

- 在非数组构造函数上调用 from()
  
```javascript
function NotArray(len) {
  console.log("NotArray called with length", len);
}

// 可迭代对象
console.log(Array.from.call(NotArray, new Set(["foo", "bar", "baz"])));
// NotArray called with length undefined
// NotArray { '0': 'foo', '1': 'bar', '2': 'baz', length: 3 }

// 类数组对象
console.log(Array.from.call(NotArray, { length: 1, 0: "foo" }));
// NotArray called with length 1
// NotArray { '0': 'foo', length: 1 }

// 当 this 值不是构造函数, 会返回一个普通的数组对象
console.log(Array.from.call({}, { length: 1, 0: "foo" })); // [ 'foo' ]

```

### Array.prototype.sort()

sort() 方法就地对数组的元素进行排序，并返回对相同数组的引用。默认排序是将元素转换为字符串，然后按照它们的 UTF-16 码元值升序排序。
