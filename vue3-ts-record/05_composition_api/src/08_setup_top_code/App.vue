<template>
  <div>
    <h2>当前计数：{{ counter }}</h2>
    <button @click="increment">+1</button>

    <hello-world message="呵呵呵" @increment="emitEvent"></hello-world>
  </div>
</template>

<script setup>
import { ref } from 'vue';
import HelloWorld from './HelloWorld.vue';

const counter = ref(0);
const increment = () => counter.value++;
const emitEvent = (e) => {
  console.log(e);
};
</script>

<style scoped></style>
