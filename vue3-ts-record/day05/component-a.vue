<template>
  <div>
    <h2>{{title}}</h2>
    <p>{{desc}}</p>
  </div>
</template>

<script>
export default {
  data() {
    return {
      title: '我是标题',
      desc: '我是内容，哈哈哈哈哈',
    }
  },
  methods: {
    btnClick() {
      console.log('按钮点击')
    },
  },

}
</script>

<style scoped>
</style>
