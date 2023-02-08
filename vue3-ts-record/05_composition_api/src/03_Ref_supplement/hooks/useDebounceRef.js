import { customRef } from 'vue';
// 自定义 ref
export default function (value) {
  let timer = null;
  return customRef((track, trigger) => {
    return {
      set(newValue) {
        clearTimeout(timer);
        timer = setTimeout(() => {
          value = newValue;
          trigger();
        }, 1000);
      },
      get() {
        track();
        return value;
      },
    };
  });
}
