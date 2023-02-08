<template>
  <div>
    <h2>组件开始</h2>
    <slot>
      <i>我是默认的 i 元素</i>
    </slot>
    <h2>组件结束</h2>
  </div>
</template>

<script>
export default {
  data() {
    return {}
  },
  methods: {},
}
</script>

<style scoped></style>
