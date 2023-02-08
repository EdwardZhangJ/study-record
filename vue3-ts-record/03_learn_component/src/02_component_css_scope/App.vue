<template>
  <div id="app">
    <h2>App</h2>
    <hello-world></hello-world>
  </div>
</template>

<script>
import HelloWorld from './HelloWorld.vue'

export default {
  components: { HelloWorld },
  data() {
    return {}
  },
}
</script>

<style scoped>
h2 {
  color: red;
}
</style>
