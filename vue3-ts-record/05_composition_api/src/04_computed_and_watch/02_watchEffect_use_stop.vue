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
    const stop = watchEffect(() => {
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
