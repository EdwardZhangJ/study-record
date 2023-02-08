<template>
  <div>
    <input type="text" ref="input" v-focus />
  </div>
</template>

<script>
import { ref } from 'vue';
export default {
  directives: {
    focus: {
      mounted(el, bindings, vnode, preVnode) {
        console.log('focus mounted');
        el.focus();
      },
    },
  },
};
</script>

<style scoped></style>
