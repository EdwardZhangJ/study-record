const EventEmitter = require('events');

const ee = new EventEmitter();

// ee.on('test', () => {
//   console.log('on 监听 test 事件');
// })

// once 监听事件，只会触发一次
ee.once('test', () => {
  console.log('once 监听 test 事件');
})

// 将事件监听函数添加到监听器数组的开头
ee.prependListener('test', () => {
  console.log('on 监听 test 事件');
})

// 将事件监听函数添加到监听器数组的开头，且只触发一次
ee.prependOnceListener('test', () => {
  console.log('on 监听 test 事件');
})

ee.emit('test');
ee.emit('test');
ee.emit('test');

ee.removeAllListeners('test');

ee.emit('test');
