<template>
  <div>
    <h2 :class="$attrs.class">{{ title }}</h2>
    <h2>{{ content }}</h2>
  </div>
</template>

<script>
export default {
  // props: ['title', 'content'],
  inheritAttrs: false,
  props: {
    title: String,
    content: {
      type: String,
      required: true, // 与default 互斥， 要么必传 要么默认值
      default: "123"
    }
  }
}
</script>

<style scoped>
h2 {
  color: red;
}
</style>
