<template>
  <div>
    <hr />
    <h2>totalPrice: {{ $store.getters.totalPrice }}</h2>
    <h2>totalPrice: {{ $store.getters.totalPriceCountGreaterN(5) }}</h2>
    <hr />

    <!-- <h2>{{ $store.getters.nameInfo }}</h2> -->
    <!-- <h2>{{ $store.getters.ageInfo }}</h2> -->
    <!-- <h2>{{ $store.getters.heightInfo }}</h2> -->

    <h2>{{ nameInfo }}</h2>
    <h2>{{ ageInfo }}</h2>
    <h2>{{ heightInfo }}</h2>

    <hr />

    <h2>{{ sNameInfo }}</h2>
    <h2>{{ sAgeInfo }}</h2>
    <hr />
  </div>
</template>

<script>
import { useState } from "../hooks/useState";
import { mapGetters } from "vuex";
export default {
  setup() {
    const storeState = useState(["counter", "name", "age", "height"]);

    const storeState2 = useState({
      sCounter: (state) => state.counter,
      sName: (state) => state.name,
    });
    return {
      ...storeState,
      ...storeState2,
    };
  },
  computed: {
    nameInfo() {
      return this.$store.getters.nameInfo;
    },
    ageInfo() {
      return this.$store.getters.ageInfo;
    },
    heightInfo() {
      return this.$store.getters.heightInfo;
    },
    ...mapGetters({
      sNameInfo: "nameInfo",
      sAgeInfo: "ageInfo",
    }),
  },
};
</script>

<style scoped></style>
