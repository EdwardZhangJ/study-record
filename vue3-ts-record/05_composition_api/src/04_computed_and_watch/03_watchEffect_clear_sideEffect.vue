<template>
  <div>
    <h2>{{ name }} - {{ age }}</h2>
    <button @click="changeName">changeName</button>
    <button @click="changeAge">changeAge</button>
  </div>
</template>

<script>
import { ref, watchEffect, watch } from 'vue';

export default {
  setup() {
    const name = ref('why');
    const age = ref(18);

    // watchEffect: 自动收集响应式的依赖
    // 有返回值, 一个函数
    const stop = watchEffect((onInvalidate) => {
      // 根据name  和 age 两个变量发送网络请求
      const timer = setTimeout(()=> {
        console.log('网络请求成功');
      }, 2000)
      onInvalidate(() => {
        // 在这个函数中清除额外的副作用
        clearTimeout(timer)
        console.log('onInvalidate');
      });
      console.log('name:', name.value, 'age:', age.value);
    });
    const changeName = () => (name.value = 'kobe');
    const changeAge = () => {
      age.value++;
      if (age.value > 25) {
        stop();
      }
    };

    return {
      name,
      age,
      changeAge,
      changeName,
    };
  },
};
</script>

<style scoped></style>
