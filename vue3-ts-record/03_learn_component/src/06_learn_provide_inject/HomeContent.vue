<template>
  <div>home-content: {{ name }}- {{ age }} - {{ length.value }}</div>
</template>

<script>
export default {
  data() {
    return {}
  },
  inject: ['name', 'age', 'length'],
  methods: {},
}
</script>

<style scoped></style>
