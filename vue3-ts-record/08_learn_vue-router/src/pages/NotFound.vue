<template>
  <div>
    <h2>Page 404 Not Found</h2>
    <p>您打开的路径页面不存在，请联系开发人员</p>
    <h1>{{ $route.params.pathMatch }}</h1>
  </div>
</template>

<script>
export default {
  data() {
    return {};
  },
  methods: {},
};
</script>

<style scoped></style>
