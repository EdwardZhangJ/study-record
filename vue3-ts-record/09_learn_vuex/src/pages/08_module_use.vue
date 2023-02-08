<template>
  <div>
    <h2>{{ $store.state.rootCounter }}</h2>
    <h2>{{ $store.state.homeModule.homeCounter }}</h2>
    <h2>{{ $store.state.userModule.userCounter }}</h2>
  </div>
</template>

<script>
export default {
  setup() {},
};
</script>

<style scoped></style>
