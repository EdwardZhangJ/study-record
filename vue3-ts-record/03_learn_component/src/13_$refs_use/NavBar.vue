<template>
  <div>
    <h2>NavBar</h2>
    <button @click="getParentAndRoot">获取父组件和跟组件</button>
  </div>
</template>

<script>
export default {
  data() {
    return {
      message: 'NavBar 中的message',
    }
  },
  methods: {
    sayHello() {
      console.log('Hello')
    },
    getParentAndRoot() {
      console.log(this.$parent)
      console.log(this.$root)
    },
  },
}
</script>

<style scoped></style>
