<script>
import { h } from 'vue';
import HelloWorld from './HelloWorld.vue';
export default {
  render() {
    return h(HelloWorld, null, {
      default: (props) => h('span', null, `app 传入到 Hello World 中的内容: ${props.name}`),
    });
  },
};
</script>

<style scoped></style>
