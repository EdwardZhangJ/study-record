<template>
  <div>
    <input type="text" ref="input" v-focus />
    <button @click="increment" v-if="counter < 2" v-why.aaaa.bbbb="'EdwardWest'">当前计数：{{ counter }}</button>
  </div>
</template>

<script>
import { ref } from 'vue';

export default {
  setup() {
    const counter = ref(0);
    const increment = () => counter.value++;
    return {
      counter,
      increment,
    };
  },
  directives: {
    why: {
      created(el, bindings, vnode, preVnode) {
        console.log('why created', el, bindings, vnode, preVnode);
        console.log('bindings', bindings);
      },
      beforeMount() {
        console.log('why beforeMount');
      },
      mounted() {
        console.log('why mounted');
      },
      beforeUpdate() {
        console.log('why beforeUpdate');
      },
      updated() {
        console.log('why updated');
      },
      beforeUnmount() {
        console.log('why beforeUnmount');
      },
      unmounted() {
        console.log('why unmounted');
      },
    },
  },
};
</script>

<style scoped></style>
