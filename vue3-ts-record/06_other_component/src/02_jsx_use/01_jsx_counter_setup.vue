<script>
import { ref } from 'vue';
import HelloWorld from './HelloWorld.vue';
export default {
  setup() {
    const counter = ref(0);
    const increment = () => this.counter++;
    const decrement = () => this.counter--;
    return {
      counter,
      increment,
      decrement,
    };
  },

  render() {
    return (
      <div>
        <h2>当前计数: {this.counter}</h2>
        <button onClick={this.increment}>+1</button>
        <button onClick={this.decrement}>-1</button>
        <HelloWorld>{{ default: (props) => <button>我是button</button> }}</HelloWorld>
      </div>
    );
  },
};
</script>

<style scoped></style>
