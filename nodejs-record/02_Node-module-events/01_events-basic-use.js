
// events模块中的事件总线
const EventEmitter = require('events')

// 创建EventEmitter的实例对象
const emitter = new EventEmitter()

// 监听事件/发射事件
emitter.on('why', () => {
  console.log('监听 why事件');
})

setTimeout(() => {
  
  emitter.emit('why')
}, 2000);
