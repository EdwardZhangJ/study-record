const EventEmitter = require('events');

const ee = new EventEmitter();

ee.on('test', () => {})
ee.on('test', () => {})
ee.on('test', () => {})

ee.on('kobe', () => {})
ee.on('kobe', () => {})

// 获取所有监听事件的名称
console.log(ee.eventNames());

// 获取监听的最大的监听个数
console.log(ee.getMaxListeners());

// 获取某一个事件名称对应的监听器个数
console.log(ee.listenerCount('test'));

// 获取某一个事件名称对应的监听器函数（数组）
console.log(ee.listeners('test'));
