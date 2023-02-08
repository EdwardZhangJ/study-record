<template>
  <div class="nav_bar">
    <div class="left">
      <slot name="left"></slot>
    </div>
    <div class="center">
      <slot name="center"></slot>
    </div>
    <div class="right">
      <slot name="right"></slot>
    </div>
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

<style scoped>
.nav_bar {
  display: flex;
}
.left,
.right,
.center {
  height: 44px;
}

.left,
.right {
  width: 80px;
  background: red;
}

.center {
  flex: 1;
  background: blue;
}
</style>
