<template>
  <div>
    <h2>root: {{ $store.state.counter }}</h2>
    <h2>home: {{ $store.state.home.homeCounter }}</h2>
    <h2>{{ $store.state.user.userCounter }}</h2>

    <hr />
    <h2>{{ $store.getters['home/doubleHomeCounter'] }}</h2>

    <button @click="homeIncrement">home+1</button>
    <button @click="homeIncrementAction">home+1</button>
  </div>
</template>

<script>
export default {
  methods: {
    homeIncrement() {
      this.$store.commit("home/increment");
    },
    homeIncrementAction() {
      this.$store.dispatch("home/incrementHomeAction");
    },
  },
  setup() {},
};
</script>

<style scoped></style>
