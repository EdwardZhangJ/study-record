<template>
  <div>
    <home></home>
    <h2>APP counter: {{ counter }}</h2>
    <button @click="increment">App +1</button>
  </div>
</template>

<script>
import { provide, ref, readonly } from 'vue';
import Home from './Home.vue';
export default {
  components: { Home },
  setup() {
    const name = 'coderwhy';
    let counter = ref(100);

    provide('name', readonly(name));
    provide('counter', readonly(counter));

    const increment = () => {
      counter.value++;
    };

    return {
      counter,
      increment,
    };
  },
};
</script>

<style scoped></style>
