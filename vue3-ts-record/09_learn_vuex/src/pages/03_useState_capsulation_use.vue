<template>
  <div>
    <h2>Home: {{ $store.state.counter }}</h2>
    <h2>Home-Obj: {{ sCounter }}</h2>
    <h2>Home-Obj: {{ sName }}</h2>
    <h2>Home-Arr: {{ counter }}</h2>
    <h2>Home-Arr: {{ name }}</h2>
    <h2>Home-Arr: {{ age }}</h2>
    <h2>Home-Arr: {{ height }}</h2>
  </div>
</template>

<script>
import { useState } from "../hooks/useState";
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
};
</script>

<style scoped></style>
