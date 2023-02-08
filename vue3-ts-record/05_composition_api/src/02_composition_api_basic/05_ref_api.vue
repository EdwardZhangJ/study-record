<template>
  <div>Home Page</div>
  <h2>{{ message }}</h2>
  <!-- 在 template 模板中使用 ref 对象，vue 会自动进行解包 -->
  <h2>当前计数： {{ counter }}</h2>
  <button @click="increment">+1</button>
</template>

<script>
import { ref } from 'vue';
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
    // 局部函数
    const increment = () => {
      counter.value++;
      console.log('increment', counter);
    };
    return {
      counter,
      increment,
    };
  },
};
</script>

<style scoped></style>
