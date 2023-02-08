<template>
  <div>Home Page</div>
  <h2>{{ message }}</h2>
  <!-- 在 template 模板中使用 ref 对象，vue 会自动进行解包 -->
  <h2>当前计数： {{ counter }}</h2>

  <!-- ref 的解包只能时一个浅层的解包 -->
  <h2>当前计数： {{ info.counter }}</h2>

  <!-- 当 -->
  <h2>当前计数： {{ reactiveInfo.counter }}</h2>

  <button @click="increment">+1</button>
</template>

<script>
import { reactive, ref } from 'vue';
export default {
  props: {
    message: {
      type: String,
      required: true,
    },
  },
  setup() {
    // counter 变成一个ref的可响应式的引用
    let counter = ref(100);
    const info = {
      counter,
    };
    const reactiveInfo = reactive({
      counter,
    });
    // 局部函数
    const increment = () => {
      counter.value++;
      console.log('increment', counter);
    };
    return {
      counter,
      info,
      reactiveInfo,
      increment,
    };
  },
};
</script>

<style scoped></style>
