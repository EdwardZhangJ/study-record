<template>
  <div>
    <button @click="increment">+ 1</button>
    <button @click="decrement">- 1</button>

    <button @click="incrementNumberN">+ n</button>
    <input type="number" v-model="num"> 请输入添加的数字值
  </div>
</template>

<script>
export default {
  emit: ['add', 'sub', 'addN'],
  data() {
    return {
      num: 2
    }
  },
  methods: {
    increment() {
      console.log('+ 1')
      this.$emit('add')
    },
    decrement() {
      console.log('- 1')
      this.$emit('sub')
    },
    incrementNumberN() {
      console.log('+ n')
      this.$emit('addN', this.num)
    },
  },
}
</script>

<style scoped></style>
