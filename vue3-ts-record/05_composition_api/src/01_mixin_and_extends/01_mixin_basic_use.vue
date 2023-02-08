<template>
  <div>{{ message }}</div>
  <button @click="foo">按钮</button>
</template>

<script>
import { demoMixin } from './mixins/demoMixin';
export default {
  mixins: [demoMixin],
  data() {
    return {
      title: 'Hello World',
      message: 'Hello App',
    };
  },
  methods: {
    foo() {
      console.log('app foo');
    }
  },
  created() {
    console.log('执行了 App 生命周期');
  }
};
</script>

<style scoped></style>
