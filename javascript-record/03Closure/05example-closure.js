function createArrayFn() {
  // 占用多的内存空间
  // int占用4个字节
  // 共占用 4byte * 1024 * 1024 = 4M
  var arr = new Array(1024 * 1024).fill(1)
  return function (params) {
    console.log(arr.length)
  }
}


// var arrayFn = createArrayFn()
// arrayFn = null

var arrayFns = []
for (var i = 0; i < 100; i++) {
  setTimeout(() => {
    arrayFns.push(createArrayFn())
  }, i * 100);
}

setTimeout(() => {
  for (var i = 0; i < 50; i++) {
    setTimeout(() => {
      arrayFns.pop()
    }, i * 100);
  }
}, 11000);


