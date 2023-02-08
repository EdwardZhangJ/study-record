<template>
  <div>
    <nav-bar>
      <template v-slot:left>
        <button>左边按钮</button>
      </template>
      <template v-slot:center>
        <h2>我是标题</h2>
      </template>
      <template v-slot:right>
        <i>右边元素</i>
      </template>
    </nav-bar>
  </div>
</template>

<script>
import NavBar from './NavBar.vue'
export default {
  components: { NavBar },
  data() {
    return {}
  },
  methods: {},
}
</script>

<style scoped></style>
