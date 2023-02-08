class Dep {
  constructor() {
    this.subscribers = new Set();
  }

  depend() {
    if (activeEffect) {
      this.subscribers.add(activeEffect);
    }
  }
  addEffect(effect) {
    this.subscribers.add(effect);
  }

  notify() {
    this.subscribers.forEach((effect) => {
      effect();
    });
  }
}

// Map({key: value}): key 是一个字符串
// WeakMap({key(对象): value})：key 是一个对象，弱引用
const targetMap = new WeakMap();
function getDep(target, key) {
  // 1. 根据对象(target) 取出 对应的 Map 对象
  let depsMap = targetMap.get(target);
  if (!depsMap) {
    depsMap = new Map();
    targetMap.set(target, depsMap);
  }
  // 2. 取出 具体的 dep 对象
  let dep = depsMap.get(key);
  if (!dep) {
    dep = new Dep();
    depsMap.set(key, dep);
  }
  return dep;
}

let activeEffect = null;
function watchEffect(effect) {
  activeEffect = effect;
  dep.depend();
  effect();
  activeEffect = null;
}

// vue2 对数据进行劫持
function reactive(raw) {
  // 劫持：对修改的属性或者对象进行判断
  Object.keys(raw).forEach((key) => {
    const dep = getDep(raw, key);
    let value = raw[key];
    Object.defineProperty(raw, key, {
      get() {
        dep.depend();
        return value;
      },
      set(newV) {
        if (value !== newV) {
          value = newV;
          dep.notify();
        }
      },
    });
  });
  return raw;
}




// 测试代码
const info = reactive({ counter: 100, name: 'why' });

const foo = reactive({ height: 1.66 });

const dep = new Dep();

// watchEffect 1
watchEffect(function () {
  console.log('effect1：', info.counter * 2, info.name);
});

// watchEffect 2
watchEffect(function () {
  console.log('effect2：', info.counter * info.counter);
});

// watchEffect 3
watchEffect(function () {
  console.log('effect3：', info.counter + 10, info.name);
});

// watchEffect 4
watchEffect(function () {
  console.log('effect4：', foo.height);
});

// info.counter++;
// info.name = '123123231312';

// info.name = 'lilei';
// dep.notify();

foo.height = 1.88;
// dep.notify();
