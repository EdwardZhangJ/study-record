<template>
  <div @click="pageClick">Home 组件: {{ name }} - {{ age }}</div>
</template>

<script>
export default {
  props: {
    name: {
      type: String,
      default: '',
    },
    age: {
      type: Number,
      default: 0,
    },
  },
  emit: ['pageClick'],

  data() {
    return {}
  },
  methods: {
    pageClick() {
      emit('pageClick')
    },
  },
}
</script>

<style scoped></style>
