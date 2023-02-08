<template>
  <div>
    <h2 ref="titleRef">{{ message }}</h2>
    <button @click="addNewMessage">添加内容</button>
  </div>
</template>

<script>
import { ref, onUpdated, nextTick } from "vue";
export default {
  setup() {
    const message = ref("哈哈哈啊");
    const titleRef = ref(null);
    const addNewMessage = () => {
      message.value += "哈哈哈哈哈哈哈哈";

      nextTick(() => {
        console.log(titleRef.value.offsetHeight);
      })
    };

    // onUpdated(() => {
    //   console.log(titleRef.value.offsetHeight);
    // });
    return {
      message,
      titleRef,
      addNewMessage,
    };
  },
};
</script>

<style scoped></style>
