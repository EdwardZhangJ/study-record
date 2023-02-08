<template>
  <div id="app">
    <h2>当前计数器：{{ counter }}</h2>
    <counter-operation
      @add="increment"
      @sub="decrement"
      @addN="incrementNumberN"
    ></counter-operation>
  </div>
</template>

<script>
import CounterOperation from './CounterOperation.vue'
export default {
  components: { CounterOperation },
  data() {
    return {
      counter: 0,
    }
  },
  methods: {
    increment() {
      this.counter++
    },
    decrement() {
      this.counter--
    },
    incrementNumberN(num) {
      this.counter += num
    },
  },
}
</script>

<style scoped></style>
