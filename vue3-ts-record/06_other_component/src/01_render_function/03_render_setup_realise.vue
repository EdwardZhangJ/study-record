<script>
import { h, ref } from 'vue';
export default {
  setup() {
    const counter = ref(0);
    return () => {
      return h('h2', { class: 'title' }, [
        h('h2', null, `当前技数：${counter.value}`),
        h('button', { onClick: () => counter.value++ }, '+1'),
        h('button', { onClick: () => counter.value-- }, '-1'),
      ]);
    };
  },
  data() {
    return {
      counter: 0,
    };
  },
  render() {
    return;
  },
};
</script>

<style scoped></style>
