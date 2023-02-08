import { ref, watch } from 'vue';
export function useLocalStorage (key, value) {
  debugger;
  const date = ref(value);
  if (value) {
    window.localStorage.setItem(key, JSON.stringify(value));
  } else {
    date.value = JSON.parse(window.localStorage.getItem(key));
  }

  watch(data, () => {
    window.localStorage.setItem(key, JSON.stringify(data));
  });

  return data;
}

// 一个参数：取值
// useLocalStorage('name');

// // 2个参数：保存值
// useLocalStorage('name', 'coderWhy');
// data.value = 'kobe';
