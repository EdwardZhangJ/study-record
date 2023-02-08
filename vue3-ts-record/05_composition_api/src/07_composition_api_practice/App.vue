<template>
  <div>
    <h2>当前计数： {{ counter }}</h2>
    <h2>当前计数 * 2： {{ doubleCounter }}</h2>
    <button @click="increment">+1</button>
    <button @click="decrement">-1</button>

    <h2>{{ data }}</h2>

    <p class="content"></p>

    <div class="scroll">
      <div class="scroll-x">mouseX:{{ mouseX }}</div>
      <div class="scroll-y">mouseY:{{ mouseY }}</div>
      <div class="scroll-x">scrollX:{{ scrollX }}</div>
      <div class="scroll-y">scrollY:{{ scrollY }}</div>
    </div>
  </div>
</template>

<script>
import { ref, computed } from 'vue';
import { useCounter, useTitle, useScrollPosition, useMousePosition, useLocalStorage } from './hooks';

export default {
  setup() {
    const { increment, decrement, counter, doubleCounter } = useCounter();

    // title
    const titleRef = useTitle('我是默认值');
    setTimeout(() => {
      titleRef.value = 'kobe';
    }, 3000);

    // 滚动位置
    const { scrollX, scrollY } = useScrollPosition();

    // 鼠标位置
    const { mouseX, mouseY } = useMousePosition();

    // localStorage
    const data = useLocalStorage('info', { name: 'coderWhy', age: 18 });

    return {
      data,

      scrollX,
      scrollY,

      mouseX,
      mouseY,

      increment,
      decrement,
      counter,
      doubleCounter,
      // ...useCounter(),
    };
  },
  // data() {
  //   return {
  //     counter: 0,
  //   };
  // },
  // methods: {
  //   increment() {
  //     this.counter++;
  //   },
  //   decrement() {
  //     this.counter--;
  //   },
  // },
  // computed: {
  //   doubleCounter() {
  //     return this.counter * 2;
  //   },
  // },
};
</script>

<style scoped>
.content {
  width: 3000px;
  height: 3000px;
}

.scroll {
  position: fixed;
  right: 30px;
  bottom: 30px;
}
</style>
