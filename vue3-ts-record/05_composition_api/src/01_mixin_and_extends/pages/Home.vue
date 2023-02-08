<template>
  <div>Home Page</div>
  <h2>{{ title }}</h2>
  <button @click="bar">按钮</button>
</template>

<script>
import BasePageVue from './BasePage.vue';
export default {
  extends: BasePageVue,
  data() {
    return {
      counter: 'Hello Home',
    };
  },
};
</script>

<style scoped></style>
