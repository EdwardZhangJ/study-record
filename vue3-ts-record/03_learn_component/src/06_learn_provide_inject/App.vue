<template>
  <div>
    <home></home>
    <button @click="addName">+name</button>
  </div>
</template>

<script>
import Home from './Home.vue'
import { computed } from 'vue'
export default {
  components: { Home },
  provide() {
    return {
      name: 'why',
      age: 16,
      length: computed(() => this.names.length), // ref 对象
    }
  },
  data() {
    return {
      names: ['abc', 'cba', 'nba'],
    }
  },

  methods: {
    addName() {
      this.names.push('why')
      console.log(this.names)
    },
  },
}
</script>

<style scoped></style>
