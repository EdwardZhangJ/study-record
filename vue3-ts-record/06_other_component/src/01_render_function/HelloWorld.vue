<script>
import { h } from 'vue';
export default {
  render() {
    return h('h2', null, [
      h('h2', null, 'Hello World'),
      this.$slots.default ? this.$slots.default({ name: 'coderWhy' }) : h('span', null, '我是 Hello World 中的内容'),
    ]);
  },
};
</script>

<style scoped></style>
