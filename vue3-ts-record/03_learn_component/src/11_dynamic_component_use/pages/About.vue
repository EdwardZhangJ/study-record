<template>
  <div>
    <span>About 组件</span>

    <button @click="increment">{{ counter }}</button>
  </div>
</template>

<script>
export default {
  data() {
    return {
      counter: 0,
    }
  },
  methods: {
    increment() {
      this.counter++
    },
  },
}
</script>

<style scoped></style>
