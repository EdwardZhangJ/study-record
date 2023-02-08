<template>
  <home></home>
  <h2>App: </h2>
</template>

<script>
import Home from './pages/Home.vue'
export default {
  name: 'App',
  components: { Home },
  data() {
    return {
      counter: 0,
    }
  },
  methods: {
    increment() {
      this.$store.commit('increment')
    },
    decrement() {
      this.$store.commit('decrement')
    },
  },
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
