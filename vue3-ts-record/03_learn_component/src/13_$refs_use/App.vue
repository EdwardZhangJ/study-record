<template>
  <div>
    <h2 ref="title">哈哈哈</h2>
    <nav-bar ref="navBar"></nav-bar>
    <button @click="btnClick">获取元素</button>
  </div>
</template>

<script>
import NavBar from './NavBar.vue'
export default {
  data() {
    return {}
  },
  methods: {
    btnClick() {
      console.log(this.$refs.title)
      console.log(this.$refs.navBar.message)
      this.$refs.navBar.sayHello()

      // $el
      console.log(this.$refs.navBar.$el); 

    },
  },
  components: { NavBar },
}
</script>

<style scoped></style>
