<template>
  <div>Home Page</div>
  <h2>{{ message }}</h2>
  <h2>{{ title }}</h2>
  <h2>当前计数： {{ counter }}</h2>
  <button @click="increment">+1</button>
  <button @click="decrement">-1</button>
</template>

<script>
export default {
  props: {
    message: {
      type: String,
      required: true,
    },
  },
  setup() {
    let counter = 100;
    // 局部函数
    const increment = () => {
      counter++;
      console.log('increment', counter);
    };
    return {
      title: 'Hello Home',
      counter,
      increment,
    };
  },
};
</script>

<style scoped></style>
