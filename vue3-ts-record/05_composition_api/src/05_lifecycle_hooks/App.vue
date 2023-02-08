<template>
  <div>
    <h2>{{ counter }}</h2>
    <button @click="increment">+1</button>
  </div>
</template>

<script>
import { onMounted, onUnmounted, onUpdated, ref } from 'vue';
export default {
  setup() {
    let counter = ref(0);
    const increment = () => {
      counter.value++;
    };

    onMounted(() => {
      console.log('App onMounted');
    });
    onUpdated(() => {
      console.log('App onUpdated');
    });
    onUnmounted(() => {
      console.log('App onUnmounted');
    });

    return {
      counter,
      increment,
    };
  },
};
</script>

<style scoped></style>
