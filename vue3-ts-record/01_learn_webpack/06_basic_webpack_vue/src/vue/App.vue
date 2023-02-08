<template>

  <h2>我是Vue渲染出来的</h2>
  <h2>{{ title }}</h2>

  <HelloWorld></HelloWorld>


</template>

<script>
import HelloWorld from './HelloWorld.vue'
export default {
  component: HelloWorld,
  data() {
    return {
      title: 'Hello World',
    }
  },
  methods: {

  },
}

</script>

<style>
</style>
