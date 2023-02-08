<template>
  <div>
    <h2>{{ info }}</h2>
    <button @click="changeInfo">修改年龄</button>
  </div>
</template>

<script>
import { ref, shallowRef, triggerRef } from 'vue';
export default {
  setup() {
    const info = shallowRef({ name: 'why' });
    // const info = ref({ name: 'why' });
    const changeInfo = () => {
      // info.value = { name: 'james' };
      info.value.name = 'james';
      triggerRef(info);
    };
    return { info, changeInfo };
  },
};
</script>

<style scoped></style>
