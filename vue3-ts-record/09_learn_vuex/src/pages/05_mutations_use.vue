<template>
  <div>
    <hr />
    <h2>当前计数: {{ $store.state.counter }}</h2>

    <hr />

    <button @click="$store.commit('increment')">+1</button>
    <button @click="$store.commit('decrement')">-1</button>
    <button @click="addTen(10)">+10</button>
    <button @click="increment_n({n: 100})">+100</button>
  </div>
</template>

<script>
import { mapMutations } from "vuex";
import { INCREMENT_N } from "../store/mutation-types";
export default {
  setup() {
    const storeMutations =  mapMutations(["increment", "decrement", INCREMENT_N])
    return {
      ... storeMutations
    }
  },
  methods: {
    addTen(num) {
      this.$store.commit(INCREMENT_N, { n: num });
    },
    // ...mapMutations(["increment", "decrement", INCREMENT_N]),
  },
  computed: {},
};
</script>

<style scoped></style>
