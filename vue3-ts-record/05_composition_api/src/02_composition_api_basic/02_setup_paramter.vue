<template>
  <div>Home Page</div>
  <h2>{{ message }}</h2>
</template>

<script>
export default {
  props: {
    message: {
      type: String,
      required: true,
    },
  },
  /**
   * 参数一： props， 父组件传递过来的属性
   */
  // setup 函数有哪些参数
  // setup 函数有什么样的返回值
  setup(props, context) {
    console.log(props.message);
    console.log(context.attrs.id, context.attrs.class);
    console.log(context.slots);
    console.log(context.emit);
  },
};
</script>

<style scoped></style>
