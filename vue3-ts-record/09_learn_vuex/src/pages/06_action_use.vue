<template>
  <div>
    <hr />
    <h2>当前计数: {{ $store.state.counter }}</h2>

    <hr />

    <button @click="increment">+1</button>
    <button @click="add">+1</button>
    <button @click="sub">-1</button>
  </div>
</template>

<script>
import { mapActions } from "vuex";
export default {
  methods: {
    // ...mapActions(['incrementAction', 'decrementAction']),
    // ...mapActions({
    //   add: 'incrementAction',
    //   sub: 'decrementAction',
    // }),
    increment() {
      this.$store.dispatch("incrementAction");
    },
  },
  mounted() {
    this.$store.dispatch("getHomeMultiData");
  },

  setup() {
    const actions = mapActions(["incrementAction", "decrementAction"]);
    const actionsTwo = mapActions({
      add: "incrementAction",
      sub: "decrementAction",
    });

    return {
      ...actions,
      ...actionsTwo,
    };
  },
};
</script>

<style scoped></style>
