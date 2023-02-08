<template>
  <div>
    <h2>{{ counter }}</h2>
    <h2>counter * 2: {{ doubleCounter }}</h2>
    <button @click="increment">+1</button>
    <button @click="decrement">-1</button>
  </div>
</template>

<script>
export default {
  data() {
    return {
      counter: 0,
    };
  },

  methods: {
    increment() {
      this.counter++;
    },
    decrement() {
      this.counter--;
    },
  },
  computed: {
    doubleCounter() {
      return this.counter * 2;
    },
  },
};
</script>

<style scoped></style>
